'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin é idempotente; o guard evita rodar no servidor.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/** Entrada padrão do projeto — usada por todas as seções. */
export const REVEAL = {
  y: 50,
  duration: 0.8,
  ease: 'power2.out',
  start: 'top 80%',
  stagger: 0.08,
} as const;

/** Respeita prefers-reduced-motion: sem deslocamento, sem duração. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
