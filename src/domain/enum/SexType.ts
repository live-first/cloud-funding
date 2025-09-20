export const SexType = {
  MEN: 'MEN',
  LADY: 'LADY',
  OTHER: 'OTHER',
} as const

export type SexType = (typeof SexType)[keyof typeof SexType]
