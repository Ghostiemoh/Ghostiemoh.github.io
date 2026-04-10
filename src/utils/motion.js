export const transitions = {
  spring: { type: "spring", stiffness: 100, damping: 20 },
  slowSpring: { type: "spring", stiffness: 50, damping: 15 },
  smooth: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  stagger: (delay = 0.1) => ({
    staggerChildren: delay,
    delayChildren: 0.2
  })
};

export const variants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: transitions.smooth
  },
  
  textReveal: {
    initial: { opacity: 0, y: "100%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: transitions.smooth
  },

  staggerContainer: {
    initial: {},
    whileInView: {
      transition: transitions.stagger()
    }
  },

  scanReveal: {
    initial: { 
      clipPath: "inset(0 100% 0 0)",
      opacity: 0
    },
    whileInView: { 
      clipPath: "inset(0 0 0 0)",
      opacity: 1
    },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
  },

  springIn: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: transitions.spring
  },

  parallax: (amount = 20) => ({
    initial: { y: 0 },
    whileInView: { y: -amount },
    transition: { type: "tween", ease: "linear" }
  })
};
