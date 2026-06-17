import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Loader2 } from 'lucide-react';

// Files are served from the deployed site. The Microsoft Office Online viewer
// needs a publicly reachable URL, so Office docs always resolve against the
// production origin (works once deployed). PDFs/text render from a relative path.
const PROD_BASE = 'https://ghostiemoh.github.io';

const isOffice = (path) => /\.(xlsx|xls|docx|pptx)$/i.test(path);

function buildSrc(path) {
  if (!path) return '';
  if (isOffice(path)) {
    const abs = PROD_BASE + path;
    return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(abs)}`;
  }
  return path; // pdf, txt, html render natively
}

const ProjectViewer = ({ project, onClose }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
  }, [project]);

  // Lock body scroll while open
  React.useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [project]);

  const src = project ? buildSrc(project.view) : '';
  const office = project ? isOffice(project.view) : false;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-8 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 130, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[88vh] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary whitespace-nowrap">{project.category}</span>
                <span className="text-white/20">/</span>
                <h3 className="text-sm font-bold text-white truncate">{project.title}</h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  aria-label={`Open ${project.title} in new tab`}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <ExternalLink size={16} />
                </a>
                {project.download && (
                  <a
                    href={project.download}
                    download
                    title="Download file"
                    aria-label={`Download ${project.title} file`}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <Download size={16} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  title="Close"
                  aria-label={`Close ${project.title} viewer`}
                  className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Viewer */}
            <div className="relative flex-1 bg-white">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0A0A0A] text-white/40">
                  <Loader2 size={28} className="animate-spin text-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Rendering dashboard…</span>
                </div>
              )}
              <iframe
                key={project.view}
                src={src}
                title={project.title}
                onLoad={() => setLoading(false)}
                className="w-full h-full border-0"
              />
            </div>

            {/* Footnote for Office files (depends on public hosting) */}
            {office && (
              <div className="px-5 md:px-7 py-2.5 border-t border-white/10 bg-white/[0.02]">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Live Excel render via Microsoft Office viewer · use Download for the editable file
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectViewer;
