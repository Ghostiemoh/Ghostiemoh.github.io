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
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
}
