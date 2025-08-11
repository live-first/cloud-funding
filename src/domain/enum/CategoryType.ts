const Category = {
  seiso: '清楚',
  rock: 'ロック',
} as const

export type CategoryType = (typeof Category)[keyof typeof Category]
