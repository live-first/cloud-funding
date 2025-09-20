import { email, phoneNumber } from '@/domain/schema'
import { z } from 'zod'

export const UserSchema = z.object({
  username: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(50, { message: '50文字以内で入力してください' }),
  email: email,
  firstName: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(20, { message: '50文字以内で入力してください' }),
  lastName: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(20, { message: '50文字以内で入力してください' }),
  birthDay: z.string().nullable(),
  sex: z.string().optional(),
  phoneNumber: phoneNumber,
  password: z.string(),
  isAgreed: z.boolean(),
  userType: z.string(),
})

export type UserType = z.infer<typeof UserSchema>

export type UserResponseType = UserType & {
  id: number
  createdAt: string
  updatedAt: string
}
