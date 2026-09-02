import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../utils/portfolioData';
import { posts } from './writingData';
import {
  WritingHeader,
  WritingFooter,
  setMeta,
  setCanonical,
  setSocial
} from './WritingChrome';

const TITLE = `Writing | ${profile.name}`;
const DESC =
  'Long-form write-ups of data analysis work: the question, the first reading that turned out wrong, and the number a decision could rest on.';

export default function WritingIndex() {
  useEffect(() => {
    document.title = TITLE;
    setMeta('description', DESC);
    setCanonical('https://ghostiemoh.com/writing');
    setSocial('Writing', DESC);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <WritingHeader current="writing" />
      <main id="main" className="writing-wrap">
        <header className="writing-head">
          <p className="eyebrow">Writing</p>
          <h1>Analysis, written out in full.</h1>
          <p className="writing-head-lede">
            Each piece takes one dataset and walks the whole path: the question, the
            first reading that turned out to be wrong, what I checked, and the figure a
            decision could rest on.
          </p>
        </header>

        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/writing/${post.slug}`}>
                <span className="post-list-meta">
                  {post.dateLabel} <span aria-hidden="true">&middot;</span>{' '}
                  {post.readingMinutes} min read
                </span>
                <span className="post-list-title">{post.title}</span>
                <span className="post-list-desc">{post.description}</span>
                <span className="post-list-more">
                  Read <ArrowUpRight size={13} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <WritingFooter />
    </>
  );
}
