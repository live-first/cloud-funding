import { z } from 'zod'

export const CategorySchema = z.object({
  id: z.number().nullable().optional(),
  label: z
    .string()
    .min(1, { message: '入力が必須の項目です' })
    .max(150, { message: '150文字以内で入力してください' }),
})

export type CategoryType = z.infer<typeof CategorySchema>
