export const AuditionCategory = {
  IDOL: 0,
} as const

export type AuditionCategory = (typeof AuditionCategory)[keyof typeof AuditionCategory]
