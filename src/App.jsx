import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X
} from 'lucide-react';
import {
  capabilities,
  caseStudies,
  credentials,
  evidence,
  method,
  pipeline,
  profile,
  services,
  shelf
} from './utils/portfolioData';
import { revealClass, useReveal } from './utils/motion';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Method', href: '#method' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' }
];

const isExternal = (href) => /^https?:/.test(href);
const linkAttrs = (href) =>
  isExternal(href) ? { target: '_blank', rel: 'noreferrer' } : {};

/* ------------------------------------------------------------------ shell */

export default function App() {
  return (
    <>
      <a href="#work" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <EvidenceStrip />
        <About />
        <Services />
        <Work />
        <Method />
        <Proof />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const { ref, visible } = useReveal();
  return (
    <Tag ref={ref} className={`${revealClass(visible)} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------- header */

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#main" className="wordmark">
          <span className="wordmark-mark" aria-hidden="true">MA</span>
          <span className="wordmark-text">
            <span>{profile.name}</span>
            <span>{profile.title}</span>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noreferrer">
            <Download size={15} aria-hidden="true" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusables = panel.querySelectorAll('a[href], button');
    focusables[0]?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      const restore =
        opener instanceof HTMLElement && opener.isConnected
          ? opener
          : document.querySelector('.site-header .menu-toggle');
      restore?.focus();
    };
  }, [onClose]);

  return (
    <div
      id="mobile-menu"
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      ref={panelRef}
    >
      <div className="wrap mobile-menu-top">
        <span className="wordmark-mark" aria-hidden="true">MA</span>
        <button type="button" className="menu-toggle" aria-label="Close menu" onClick={onClose}>
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      <nav className="wrap mobile-menu-nav" aria-label="Site">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
        <a href={profile.resume} target="_blank" rel="noreferrer" onClick={onClose}>
          Resume
        </a>
      </nav>
    </div>
  );
}

/* ------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-lead">
          <p className="eyebrow">Data Analyst Portfolio</p>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-solid">
              See the case studies
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">
              <Mail size={15} aria-hidden="true" />
              Email me
            </a>
          </div>
        </div>

        <aside className="hero-rail" aria-label="How I work through a problem">
          <p className="eyebrow">From data to decision</p>
          <ol className="flow">
            {pipeline.map((label, i) => (
              <li key={label}>
                <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{label}</span>
              </li>
            ))}
          </ol>
          <p className="hero-rail-note">{profile.positioning}</p>
        </aside>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- evidence */

function EvidenceStrip() {
  return (
    <section className="evidence" aria-label="Background at a glance">
      <div className="wrap evidence-grid">
        {evidence.map((item) => (
          <div key={item.label} className="evidence-item">
            <p className="evidence-label">{item.label}</p>
            <p className="evidence-value">{item.value}</p>
            <p className="evidence-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- about */

function About() {
  return (
    <section className="about" aria-label="About Muhammad">
      <Reveal className="wrap about-inner">
        <img
          src="/images/portrait-about.webp"
          width="440"
          height="440"
          alt="Muhammad Auwal Abdulaziz"
          className="about-portrait"
          loading="lazy"
          decoding="async"
        />
        <div className="about-body">
          <p className="eyebrow">Who is behind this</p>
          <p className="about-name">{profile.name}</p>
          <p className="about-line">{profile.bioLine}</p>
          <a href={profile.resume} className="about-resume" target="_blank" rel="noreferrer">
            <Download size={14} aria-hidden="true" />
            Read the resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------------- services */

function Services() {
  return (
    <section className="services" aria-label="Ways to work together">
      <Reveal className="wrap services-inner">
        <p className="eyebrow">Ways to work together</p>
        <h2 className="services-title">
          Bring a dataset, a recurring question, or a dashboard that is not landing.
        </h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service">
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
              <p className="service-scope">{s.scope}</p>
            </div>
          ))}
        </div>
        <p className="services-note">{profile.confidentialityNote}</p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------- work */

function Work() {
  const featured = caseStudies.filter((c) => c.featured);
  const standard = caseStudies.filter((c) => !c.featured);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead
          num="01"
          eyebrow="Selected work"
          title="Case studies, not a screenshot gallery."
          lede="Ordered by how much analytical work they show and how close they sit to a real decision. Every figure comes from the linked workbook or repository."
        />

        <div className="featured-list">
          {featured.map((project, i) => (
            <FeaturedCase key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        <Reveal className="standard-grid">
          {standard.map((project) => (
            <StandardCase key={project.id} project={project} />
          ))}
        </Reveal>

        <Shelf />
      </div>
    </section>
  );
}

function SectionHead({ num, eyebrow, title, lede }) {
  return (
    <Reveal className="section-head">
      <p className="section-num">{num}</p>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}

function Field({ label, children }) {
  return (
    <div className="field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="project-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} {...linkAttrs(link.href)}>
          {link.label}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function TagRow({ items, label }) {
  return (
    <ul className="tag-row" aria-label={label}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function FigureNumbers({ chart }) {
  return (
    <details className="fig-numbers">
      <summary>Show the numbers</summary>
      <table>
        <tbody>
          {chart.bars.map((b) => (
            <tr key={b.label}>
              <th scope="row">{b.label}</th>
              <td>{b.display}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}

function FeaturedCase({ project, index }) {
  return (
    <Reveal as="article" className="featured">
      <figure className="featured-figure">
        <p className="figure-kicker">Fig. {index}</p>
        <BarFigure chart={project.chart} title={project.title} desc={project.finding} />
        <figcaption className="figure-caption">
          <span className="figure-caption-tag" aria-hidden="true">What to notice</span>
          {project.chart.caption}
        </figcaption>
        <FigureNumbers chart={project.chart} />
      </figure>

      <div className="featured-body">
        <p className="case-meta">
          <span className="case-index">Case {String(index).padStart(2, '0')}</span>
          <span>{project.category}</span>
          <span>{project.role}</span>
        </p>
        <h3>{project.title}</h3>
        {project.outcome && <p className="case-outcome">{project.outcome}</p>}

        <dl className="field-grid">
          <Field label="Problem">{project.problem}</Field>
          <Field label="Data">{project.dataset}</Field>
          <Field label="Process">{project.process}</Field>
          <Field label="Finding">{project.finding}</Field>
          <div className="field field--rec">
            <dt>Recommendation</dt>
            <dd>{project.implication}</dd>
          </div>
        </dl>

        {project.deeper && (
          <details className="deeper">
            <summary>Deeper look: what I checked and what I would recommend</summary>
            <div className="deeper-body">
              <div>
                <p className="deeper-head">What I checked</p>
                <ul>
                  {project.deeper.checked.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="deeper-head">What I would recommend</p>
                <ul>
                  {project.deeper.recommend.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        )}

        <div className="case-foot">
          <TagRow items={project.tools} label="Tools used" />
          <ProjectLinks links={project.links} />
        </div>

        {project.image && (
          <figure className="featured-shot">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{project.imageCaption}</figcaption>
          </figure>
        )}
      </div>
    </Reveal>
  );
}

function StandardCase({ project }) {
  return (
    <article className="standard">
      <p className="case-meta">
        <span>{project.category}</span>
        <span>{project.role}</span>
      </p>
      <h3>{project.title}</h3>
      {project.outcome && <p className="case-outcome">{project.outcome}</p>}
      <dl className="field-grid field-grid--tight">
        <Field label="Problem">{project.problem}</Field>
        <Field label="Process">{project.process}</Field>
        <Field label="Finding">{project.finding}</Field>
        <Field label="Recommendation">{project.implication}</Field>
      </dl>
      {project.image && (
        <figure className="featured-shot">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{project.imageCaption}</figcaption>
        </figure>
      )}
      <div className="case-foot">
        <TagRow items={project.tools} label="Tools used" />
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

function ToolPreview({ kind }) {
  const common = {
    viewBox: '0 0 200 120',
    className: 'tool-preview',
    'aria-hidden': 'true',
    preserveAspectRatio: 'xMidYMid meet'
  };
  if (kind === 'grid') {
    return (
      <svg {...common}>
        <rect x="14" y="16" width="172" height="88" className="tp-frame" />
        <rect x="14" y="16" width="172" height="15" className="tp-fill-ink" />
        {[0, 1, 2, 3].map((i) => (
          <line key={`r${i}`} x1="14" y1={31 + i * 18} x2="186" y2={31 + i * 18} className="tp-line" />
        ))}
        {[1, 2, 3].map((i) => (
          <line key={`c${i}`} x1={14 + i * 43} y1="16" x2={14 + i * 43} y2="104" className="tp-line" />
        ))}
        <rect x="59" y="49" width="41" height="16" className="tp-fill-accent" />
        <polyline points="120,42 134,34 148,38 162,26 178,30" className="tp-path-ink" />
      </svg>
    );
  }
  if (kind === 'signal') {
    return (
      <svg {...common}>
        <rect x="14" y="16" width="172" height="88" className="tp-frame" />
        <line x1="14" y1="88" x2="186" y2="88" className="tp-line" />
        <polyline points="14,84 44,72 74,78 104,56 134,60 164,40 186,44" className="tp-path-muted" />
        <polyline points="14,78 44,70 74,54 104,58 134,42 164,44 186,26" className="tp-path-accent" />
        <circle cx="186" cy="26" r="3" className="tp-dot" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="14" y="16" width="172" height="88" className="tp-frame" />
      {[42, 54, 38, 62, 48].map((h, i) => (
        <rect
          key={i}
          x={24 + i * 14}
          y={94 - h}
          width="9"
          height={h}
          className={i === 3 ? 'tp-fill-accent' : 'tp-fill-ink'}
        />
      ))}
      <rect x="112" y="30" width="60" height="18" className="tp-fill-ink" />
      <path d="M118 82 A 18 18 0 0 1 154 82" className="tp-arc" />
    </svg>
  );
}

function Shelf() {
  const lists = shelf.filter((g) => g.layout !== 'cards');
  const cardGroups = shelf.filter((g) => g.layout === 'cards');
  return (
    <Reveal className="shelf">
      <h3>Also on the shelf</h3>
      <p className="shelf-lede">
        Smaller projects and experiments. Useful as proof, not competing with the case studies above.
      </p>
      <div className="shelf-grid">
        {lists.map((group) => (
          <div key={group.group} className="shelf-group">
            <p className="shelf-group-name">{group.group}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.name}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {cardGroups.map((group) => (
        <div key={group.group} className="tool-block">
          <p className="shelf-group-name">{group.group}</p>
          {group.note && <p className="shelf-group-note">{group.note}</p>}
          <div className="tool-cards">
            {group.items.map((item) => (
              <article key={item.name} className="tool-card">
                <div className="tool-card-media">
                  <ToolPreview kind={item.preview} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.detail}</p>
                <div className="tool-card-links">
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noreferrer">
                      Live site
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  )}
                  {item.repo && (
                    <a href={item.repo} target="_blank" rel="noreferrer">
                      GitHub
                      <ArrowUpRight size={11} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------ bar figure */

function BarFigure({ chart, title, desc }) {
  const slug = title.replace(/\W+/g, '-').toLowerCase();
  const titleId = `fig-t-${slug}`;
  const descId = `fig-d-${slug}`;
  const fmt = (v) => {
    const n = Math.round(v * 10) / 10;
    const s = Number.isInteger(n) ? String(n) : n.toFixed(1);
    return `${chart.prefix || ''}${s}${chart.unit || ''}`;
  };
  const horizontal = chart.orientation === 'horizontal';
  const W = 720;
  const H = horizontal ? 214 : 384;

  const svg = (children) => (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="figure"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={titleId}>{`Figure. ${title}`}</title>
      <desc id={descId}>{desc}</desc>
      <defs>
        <pattern id="hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" className="fig-hatch" />
        </pattern>
      </defs>
      {children}
    </svg>
  );

  if (horizontal) {
    const trackX = 4;
    const valueGutter = 86;
    const trackW = W - trackX - valueGutter;
    const barH = 34;
    const rowH = 96;
    const top = 30;
    const at = (v) => trackX + (v / chart.axisMax) * trackW;
    const markX = at(chart.bars[0].value);
    const hi = chart.bars.find((b) => b.highlight);
    const hiEnd = hi ? at(hi.value) : markX;
    const bracketY = top + rowH + barH + 12;

    return svg(
      <>
        <line x1={markX} y1={top - 16} x2={markX} y2={bracketY} className="fig-mark" />
        <text x={markX - 6} y={top - 8} textAnchor="end" className="fig-annot">
          answer rate
        </text>
        {chart.bars.map((bar, i) => {
          const y = top + i * rowH;
          const w = at(bar.value) - trackX;
          const hasGap = bar.highlight && markX > trackX + w;
          const valueX = hasGap ? markX + 12 : trackX + w + 12;
          return (
            <g key={bar.label}>
              <text x={trackX} y={y - 12} className="fig-cat">{bar.label}</text>
              <rect x={trackX} y={y} width={trackW} height={barH} className="fig-track" rx="1" />
              <rect
                x={trackX}
                y={y}
                width={w}
                height={barH}
                rx="1"
                className={bar.highlight ? 'fig-bar fig-bar--hi' : 'fig-bar'}
              />
              {hasGap && (
                <rect x={trackX + w} y={y} width={markX - (trackX + w)} height={barH} fill="url(#hatch)" />
              )}
              <text
                x={valueX}
                y={y + barH / 2 + 4}
                className={bar.highlight ? 'fig-value fig-value--hi' : 'fig-value'}
              >
                {bar.display}
              </text>
            </g>
          );
        })}
        {chart.gapNote && (
          <>
            <path
              d={`M${hiEnd},${bracketY - 6} L${hiEnd},${bracketY} L${markX},${bracketY} L${markX},${bracketY - 6}`}
              className="fig-bracket"
            />
            <text x={(hiEnd + markX) / 2} y={bracketY + 16} textAnchor="middle" className="fig-annot fig-annot--strong">
              {chart.gapNote}
            </text>
          </>
        )}
      </>
    );
  }

  // vertical
  const axisGutter = 52;
  const padR = 18;
  const plotTop = 58;
  const baseline = 322;
  const plotW = W - axisGutter - padR;
  const plotH = baseline - plotTop;
  const n = chart.bars.length;
  const slot = plotW / n;
  const barW = Math.min(52, slot * 0.44);
  const yAt = (v) => baseline - (v / chart.axisMax) * plotH;

  return svg(
    <>
      {[0.25, 0.75].map((f) => (
        <line key={f} x1={axisGutter} y1={baseline - f * plotH} x2={W - padR} y2={baseline - f * plotH} className="fig-grid-faint" />
      ))}
      {[0, 0.5, 1].map((f) => {
        const y = baseline - f * plotH;
        return (
          <g key={f}>
            <line x1={axisGutter} y1={y} x2={W - padR} y2={y} className={f === 0 ? 'fig-axis' : 'fig-grid'} />
            <text x={axisGutter - 8} y={y + 4} textAnchor="end" className="fig-axis-label">
              {f === 0 ? '0' : fmt(f * chart.axisMax)}
            </text>
          </g>
        );
      })}
      {chart.bars.map((bar, i) => {
        const cx = axisGutter + slot * (i + 0.5);
        const y = yAt(bar.value);
        const h = baseline - y;
        let cls = 'fig-bar';
        if (bar.highlight) cls = 'fig-bar fig-bar--hi';
        if (bar.muted) cls = 'fig-bar fig-bar--muted';
        return (
          <g key={bar.label}>
            <line x1={cx} y1={baseline} x2={cx} y2={baseline + 5} className="fig-axis" />
            <rect
              x={cx - barW / 2}
              y={y}
              width={barW}
              height={h}
              rx="1"
              className={cls}
              fill={bar.muted ? 'url(#hatch)' : undefined}
            />
            {bar.tag && !bar.muted && (
              <text x={cx} y={y - 30} textAnchor="middle" className="fig-annot fig-annot--strong">
                {bar.tag}
              </text>
            )}
            <text
              x={cx}
              y={y - 12}
              textAnchor="middle"
              className={bar.highlight ? 'fig-value fig-value--hi' : 'fig-value'}
            >
              {bar.display}
            </text>
            <text x={cx} y={baseline + 22} textAnchor="middle" className="fig-cat">
              {bar.label}
            </text>
            {bar.tag && bar.muted && (
              <text x={cx} y={baseline + 38} textAnchor="middle" className="fig-annot">
                {bar.tag}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
}

/* ----------------------------------------------------------------- method */

function Method() {
  return (
    <section id="method" className="section section-tint">
      <div className="wrap">
        <SectionHead
          num="02"
          eyebrow="Method"
          title="The same four steps behind every case above."
          lede="A project is judged by the question it answers, not the tool it used."
        />
        <Reveal className="method-grid">
          {method.map((m) => (
            <div key={m.step} className="method-card">
              <span className="flow-num">{m.step}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="capability-grid">
          {capabilities.map((c) => (
            <div key={c.title} className="capability">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ proof */

function Proof() {
  return (
    <section id="proof" className="section">
      <div className="wrap proof-grid">
        <Reveal className="proof-intro">
          <p className="section-num">03</p>
          <p className="eyebrow">Proof</p>
          <h2>Credentials, in their proper place.</h2>
          <p>They back up the work. They do not stand in for it.</p>
          <div className="proof-links">
            <a href={profile.github} className="btn btn-outline" target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.twitter}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.twitterUser} on X`}
            >
              X / Twitter
            </a>
          </div>
        </Reveal>
        <Reveal as="ul" className="cred-list">
          {credentials.map((c) => {
            const body = (
              <>
                <span className="cred-title">{c.title}</span>
                <span className="cred-meta">
                  {c.issuer} <span aria-hidden="true">&middot;</span> {c.year}
                </span>
              </>
            );
            return (
              <li key={c.title}>
                {c.href ? (
                  <a href={c.href} {...linkAttrs(c.href)}>
                    {body}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <div>{body}</div>
                )}
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- contact */

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-inner">
        <img
          src="/images/portrait-contact.webp"
          width="560"
          height="700"
          alt="Muhammad Auwal Abdulaziz"
          className="contact-portrait"
          loading="lazy"
          decoding="async"
        />
        <div className="contact-copy">
          <p className="section-num">04</p>
          <p className="eyebrow">Contact</p>
          <h2>Start with a short brief, or just send the messy file.</h2>
          <p>{profile.availability}</p>
          <a
            href={`mailto:${profile.email}?subject=Project%20enquiry`}
            className="btn btn-solid btn-lg"
          >
            <Mail size={16} aria-hidden="true" />
            Start a project
          </a>
          <p className="contact-email">{profile.email}</p>
          <div className="contact-elsewhere">
            <a href={profile.telegram} target="_blank" rel="noreferrer">
              <Send size={14} aria-hidden="true" />
              Telegram
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={14} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={14} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.twitter} target="_blank" rel="noreferrer">X</a>
          <a href={profile.telegram} target="_blank" rel="noreferrer">Telegram</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="footer-colophon">Built with React and Vite. No trackers.</p>
      </div>
    </footer>
  );
}
