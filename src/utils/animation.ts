export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
  },
};

export const animText = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

export const container = {
  hidden: { x: 100 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.75,
    },
  },
};
