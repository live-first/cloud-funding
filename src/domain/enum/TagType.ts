const Tag = {
  seiso: '清楚',
} as const

export type TagType = (typeof Tag)[keyof typeof Tag]
