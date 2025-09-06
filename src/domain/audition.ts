import { z } from 'zod'
import { company, email, numberArray, phoneNumber, stringArray, url } from './schema'

export const AuditionSchema = z.object({
  id: z.number().nullable().optional(),
  title: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(50, { message: '50文字以内で入力してください' }),
  subtitle: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(100, { message: '100文字以内で入力してください' }),
  img: stringArray.optional(),
  deadline: z.string().nullable(),
  auditionCategory: numberArray.optional(),
  outline: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(250, { message: '250文字以内で入力してください' }),
  region: numberArray.optional(),
  entryMethod: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(250, { message: '250文字以内で入力してください' }),
  tag: stringArray.optional(),
  requirements: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(250, { message: '250文字以内で入力してください' }),
  flow: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(250, { message: '250文字以内で入力してください' }),
  name: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(50, { message: '50文字以内で入力してください' }),
  phoneNumber: phoneNumber,
  email: email,
  organizer: company,
  hp: url,
  status: numberArray.optional(),
})

export type AuditionType = z.infer<typeof AuditionSchema>
