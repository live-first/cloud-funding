import { context, datetime, stringArray, title } from '@/domain/schema'
import { z } from 'zod'

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

export const NewsSchema = z.object({
  id: z.number().nullable(),
  title: title,
  context: context,
  domains: stringArray,
  open: datetime,
  close: datetime,
  category: stringArray,
})

export type NewsRequestType = z.infer<typeof NewsSchema>
