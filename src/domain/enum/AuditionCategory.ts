export const AuditionCategory = {
  IDOL: 'IDOL',
} as const

export type AuditionCategory = (typeof AuditionCategory)[keyof typeof AuditionCategory]

export const auditionCategoryToString = (key?: string) => {
  return key === AuditionCategory.IDOL ? 'アイドル' : ''
}
