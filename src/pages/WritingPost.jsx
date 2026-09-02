import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { profile } from '../utils/portfolioData';
import { getPost } from './writingData';
import { WritingHeader, WritingFooter, setMeta } from './WritingChrome';

export default function WritingPost({ slug }) {
  const post = getPost(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | ${profile.name}`;
      setMeta('description', post.description);
    } else {
      document.title = `Not found | ${profile.name}`;
    }
  }, [post]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <WritingHeader current="writing" />
      <main id="main" className="writing-wrap">
        {post ? (
          <article className="post">
            <header className="post-head">
              <p className="post-list-meta">
                {post.dateLabel} <span aria-hidden="true">&middot;</span>{' '}
                {post.readingMinutes} min read
              </p>
              <h1>{post.title}</h1>
              {post.description && <p className="post-standfirst">{post.description}</p>}
            </header>

            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <footer className="post-foot">
              <a href="/writing" className="post-back">
                <ArrowLeft size={14} aria-hidden="true" />
                All writing
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">
                Email me
              </a>
            </footer>
          </article>
        ) : (
          <div className="writing-head">
            <p className="eyebrow">Writing</p>
            <h1>That post is not here.</h1>
            <p className="writing-head-lede">
              The link may be old or mistyped. <a href="/writing">See everything</a>.
            </p>
          </div>
        )}
      </main>
      <WritingFooter />
    </>
  );
}
