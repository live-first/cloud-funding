const Sex = {
  other: 0,
  mens: 1,
  ladies: 2,
} as const

export type SexType = (typeof Sex)[keyof typeof Sex]
