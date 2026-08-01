export const BENEFITS_EASE = [0.32, 0.72, 0, 1] as const;

export const BENEFITS_VIEWPORT = {
  once: true,
  amount: 0.22,
} as const;

export const BENEFITS_STAGGER = 0.1;

export const BENEFITS_FADE_UP = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: BENEFITS_EASE },
  },
} as const;

export const BENEFITS_CARD_REVEAL = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: BENEFITS_EASE,
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
} as const;

export const BENEFITS_CONTENT_REVEAL = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
} as const;

export const BENEFITS_LIST_REVEAL = {
  hidden: {},
  visible: {
    transition: { staggerChildren: BENEFITS_STAGGER },
  },
} as const;

/** Max scale while the sticky image travels through its panel. */
export const BENEFIT_STICKY_ZOOM_MAX = 1.22;
