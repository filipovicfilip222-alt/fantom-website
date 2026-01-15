import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Split text into characters for animation
export function splitTextToChars(text: string): string[] {
  return text.split('')
}

// Split text into words for animation
export function splitTextToWords(text: string): string[] {
  return text.split(' ')
}

// Generate random delay for staggered animations
export function getStaggerDelay(index: number, baseDelay: number = 0.05): number {
  return index * baseDelay
}

// Ease functions for animations
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
} as const
