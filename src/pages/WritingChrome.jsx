import React from 'react';
import { profile } from '../utils/portfolioData';

export function WritingHeader({ current }) {
  return (
    <header className="site-header site-header--writing">
      <div className="wrap header-inner">
        <a href="/" className="wordmark">
          <span className="wordmark-mark" aria-hidden="true">MA</span>
          <span className="wordmark-text">
            <span>{profile.name}</span>
            <span>{profile.title}</span>
          </span>
        </a>
        <nav className="header-nav writing-nav" aria-label="Primary">
          <a href="/" className="nav-link">Work</a>
          <a
            href="/writing"
            className="nav-link"
            aria-current={current === 'writing' ? 'page' : undefined}
          >
            Writing
          </a>
          <a href="/#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export function WritingFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <div className="footer-links">
          <a href="/">Work</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.twitter} target="_blank" rel="noreferrer">X</a>
        </div>
        <p className="footer-colophon">Built with React and Vite. No trackers.</p>
      </div>
    </footer>
  );
}

export function setMeta(name, content) {
  if (typeof document === 'undefined') return;
  setContentTag(`meta[name="${name}"]`, () => {
    const el = document.createElement('meta');
    el.setAttribute('name', name);
    return el;
  }, content);
}

function setContentTag(selector, make, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = make();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
}

// Point the canonical link, and the Open Graph URL, at this page rather than
// letting them inherit the homepage value baked into index.html.
export function setCanonical(url) {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
  setContentTag('meta[property="og:url"]', () => {
    const el = document.createElement('meta');
    el.setAttribute('property', 'og:url');
    return el;
  }, url);
}

export function setSocial(title, description) {
  if (typeof document === 'undefined') return;
  for (const prop of ['og:title', 'twitter:title']) {
    setContentTag(`meta[property="${prop}"], meta[name="${prop}"]`, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', prop);
      return el;
    }, title);
  }
  for (const prop of ['og:description', 'twitter:description']) {
    setContentTag(`meta[property="${prop}"], meta[name="${prop}"]`, () => {
      const el = document.createElement('meta');
      el.setAttribute('property', prop);
      return el;
    }, description);
  }
}
