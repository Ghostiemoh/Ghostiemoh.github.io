import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Writing pages (and the markdown renderer they pull in) are code-split so the
// homepage bundle stays lean.
const WritingIndex = lazy(() => import('./pages/WritingIndex.jsx'));
const WritingPost = lazy(() => import('./pages/WritingPost.jsx'));

function route() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/writing') return <WritingIndex />;
  if (path.startsWith('/writing/')) {
    const slug = decodeURIComponent(path.slice('/writing/'.length));
    return <WritingPost slug={slug} />;
  }
  return <App />;
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Suspense fallback={null}>{route()}</Suspense>
  </React.StrictMode>
);
