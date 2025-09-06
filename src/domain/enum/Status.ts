export const Status = {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLIC: 'PUBLIC',
  REJECT: 'REJECT',
  REPUBLIC: 'REPUBLIC',
} as const

export type Status = (typeof Status)[keyof typeof Status]

export type StatusRequest = {
  id: number
  status: string
}

export const statusToString = (key?: string) => {
  return key === Status.DRAFT
    ? '下書き'
    : key === Status.REVIEW
    ? '審査中'
    : key === Status.PUBLIC
    ? '公開'
    : key === Status.REJECT
    ? '却下'
    : key === Status.REPUBLIC
    ? '非公開'
    : ''
}
