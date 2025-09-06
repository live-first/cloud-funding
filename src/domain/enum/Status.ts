export const Status = {
  DRAFT: 0,
  REVIEW: 1,
  PUBLIC: 2,
  REJECT: 3,
  REPUBLIC: 4,
} as const

export type Status = (typeof Status)[keyof typeof Status]

export type StatusRequest = {
  id: number
  status: Status
}
