import { context, numberArray, stringArray, title } from '@/domain/schema'
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
  category: number[] | null
  createdAt: string
  updatedAt: string
}

export const NewsSchema = z.object({
  title: title,
  context: context,
  img: stringArray.optional(),
  files: stringArray.optional(),
  domains: stringArray.optional(),
  open: z.string().nullable(),
  close: z.string().nullable(),
  category: numberArray.optional(),
})

export type NewsRequestType = z.infer<typeof NewsSchema>

export type NewsCreateResponseType = {
  id: number
  img: string[]
}
