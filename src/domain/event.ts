import z from 'zod'
import { context, stringArray, title } from './schema'

export const EventSchema = z.object({
  id: z.number().nullable().optional(),
  title: title,
  placeName: z.string(),
  date: z.string().nullable(),
  openTime: z.string().nullable(),
  startTime: z.string().nullable(),
  img: stringArray.optional(),
  context: context,
})

export type EventType = z.infer<typeof EventSchema>

export type EventCreateResponseType = {
  id: number
  img: string[]
}
