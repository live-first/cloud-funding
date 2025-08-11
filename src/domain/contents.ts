import { z } from 'zod'
import { title, url } from './schema'
import { CategoryType } from './enum/CategoryType'
import { SexType } from './enum/SexType'
import { TagType } from './enum/TagType'

export const contentsSchema = z.object({
  title: title,
  subtitle: title,
  // picture: string,
  // deadline: date(),
  // category: Category(enum)[](),
  // name: z.string(),
  // outline: z.string(),
  // region: z.string(),
  // age: z.string(),
  // sex: sexType(),
  // entryMethod: z.string(),
  // tag: TagType[],
  // sequiremets: z.string(),
  // flow: z.string(),
  // phoneNumber: z.string(),
  // name: z.string(),
  // email: z.string(),
  // organizer: z.string(),
  hp: url,
})

export type contentsType = {
  title: string
  subtitle: string
  picture: string[]
  deadline: string
  category: CategoryType[]
  outline: string
  region: string
  age: string
  sex: SexType
  entryMethod: string
  tag: TagType[]
  sequiremets: string
  flow: string
  phoneNumber: string
  name: string
  email: string
  organizer: string
  hp: string
}
