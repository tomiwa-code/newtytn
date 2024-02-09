import { animate } from "framer-motion";

export const orangeCircle = {
  initial: {
    opacity: 0,
    y: "-100%",
    x: "-50%",
  },
  animate: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.9,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const theImage = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    x: "-50%",
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.9,
      type: "spring",
      stiffness: 120,
    },
  },
};

export const heroSlideInLeft = {
  initial: {
    opacity: 0,
    y: -70,
    x: -50,
  },
  animate: (custom: number) => ({
    x: 0,
    y: -70,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.8,
      type: "tween",
    },
  }),
};

export const fadeInBottomSpring = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.8,
      type: "tween",
    },
  }),
};

export const scrollAction = {
  animate: {
    y: [14, 0, 14],
    transition: {
      delay: 2.3,
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const heroSlideInRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.8,
      type: "tween",
    },
  },
};

export const titleSlide = (props: string) => ({
  initial: {
    opacity: 0,
    x: props === "left" ? 50 : -50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween",
    },
  },
});

export const arrivalSlide = (props: string) => ({
  initial: {
    opacity: 0,
    x: props === "left" ? 50 : -50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      type: "tween",
    },
  },
});

export const staggerMadre = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const cateAnime = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  animate: (props: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: props,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

export const appearAnime = {
  initial: {
    opacity: 0,
  },
  animate: (props: number) => ({
    opacity: 1,
    transition: { delay: props, ease: "easeInOut" },
  }),
};

export const scrollActionAxis = {
  animate: {
    x: [14, 0, 14],
    transition: {
      delay: 2.3,
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const fadeInBottom = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "tween",
    },
  },
};

export const fadeInUpToggle = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.3,
    },
  },
  hide: {
    y: 50,
    opacity: 0,
  },
};
