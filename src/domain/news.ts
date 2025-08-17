export type NewsType = {
  id: number
  title: string
  context: string[]
  img: string[] | null
  files: string[] | null
  domains: string[]
  open: Date | null
  close: Date | null
  category: string[] | null
  createdAt: string
  updatedAt: string
}
