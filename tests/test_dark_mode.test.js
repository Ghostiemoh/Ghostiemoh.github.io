const test = require('node:test');
const assert = require('node:assert');

// Setup global mocks before requiring the script
global.document = {
  documentElement: {
    classList: {
      classes: new Set(),
      add: function(cls) { this.classes.add(cls); },
      remove: function(cls) { this.classes.delete(cls); },
      toggle: function(cls) {
        if (this.classes.has(cls)) {
          this.classes.delete(cls);
          return false;
        } else {
          this.classes.add(cls);
          return true;
        }
      },
      contains: function(cls) { return this.classes.has(cls); },
      clear: function() { this.classes.clear(); }
    }
  }
};

global.localStorage = {
  store: {},
  getItem: function(key) { return this.store[key] || null; },
  setItem: function(key, value) { this.store[key] = String(value); },
  removeItem: function(key) { delete this.store[key]; },
  clear: function() { this.store = {}; }
};

global.matchMediaMock = {
  matches: false,
  callbacks: [],
  addEventListener: function(event, callback) {
    if (event === 'change') {
      this.callbacks.push(callback);
    }
  },
  triggerChange: function(matches) {
    this.matches = matches;
    this.callbacks.forEach(cb => cb({ matches }));
  },
  clearCallbacks: function() {
    this.callbacks = [];
  }
};

global.window = {
  matchMedia: function(query) {
    if (query === '(prefers-color-scheme: dark)') {
      return global.matchMediaMock;
    }
    return { matches: false, addEventListener: function(){} };
  }
};

// Require the logic file (evaluates the script, including setting up event listeners if any)
const darkMode = require('../js/dark_mode.js');

test('Dark Mode Logic', async (t) => {
  t.beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.clear();
    global.matchMediaMock.matches = false;
  });

  await t.test('checkDarkModePreference: uses saved preference (true) ignoring system', () => {
    localStorage.setItem('darkMode', 'true');
    global.matchMediaMock.matches = false; // System prefers light
    darkMode.checkDarkModePreference();
    assert.strictEqual(document.documentElement.classList.contains('dark'), true);
  });

  await t.test('checkDarkModePreference: uses saved preference (false) ignoring system', () => {
    localStorage.setItem('darkMode', 'false');
    global.matchMediaMock.matches = true; // System prefers dark
    darkMode.checkDarkModePreference();
    assert.strictEqual(document.documentElement.classList.contains('dark'), false);
  });

  await t.test('checkDarkModePreference: uses system preference (true) when no saved preference', () => {
    global.matchMediaMock.matches = true; // System prefers dark
    darkMode.checkDarkModePreference();
    assert.strictEqual(document.documentElement.classList.contains('dark'), true);
  });

  await t.test('checkDarkModePreference: uses system preference (false) when no saved preference', () => {
    global.matchMediaMock.matches = false; // System prefers light
    darkMode.checkDarkModePreference();
    assert.strictEqual(document.documentElement.classList.contains('dark'), false);
  });

  await t.test('toggleDarkMode: adds class and saves preference if currently light', () => {
    darkMode.toggleDarkMode();
    assert.strictEqual(document.documentElement.classList.contains('dark'), true);
    assert.strictEqual(localStorage.getItem('darkMode'), 'true');
  });

  await t.test('toggleDarkMode: removes class and saves preference if currently dark', () => {
    document.documentElement.classList.add('dark');
    darkMode.toggleDarkMode();
    assert.strictEqual(document.documentElement.classList.contains('dark'), false);
    assert.strictEqual(localStorage.getItem('darkMode'), 'false');
  });

  await t.test('system preference change: adds class if no saved preference and system switches to dark', () => {
    global.matchMediaMock.triggerChange(true);
    assert.strictEqual(document.documentElement.classList.contains('dark'), true);
  });

  await t.test('system preference change: removes class if no saved preference and system switches to light', () => {
    document.documentElement.classList.add('dark');
    global.matchMediaMock.triggerChange(false);
    assert.strictEqual(document.documentElement.classList.contains('dark'), false);
  });

  await t.test('system preference change: does nothing if saved preference exists', () => {
    localStorage.setItem('darkMode', 'true');
    document.documentElement.classList.add('dark');

    // Switch system to light
    global.matchMediaMock.triggerChange(false);

    // Since preference is saved, it should stay dark
    assert.strictEqual(document.documentElement.classList.contains('dark'), true);
  });
});
