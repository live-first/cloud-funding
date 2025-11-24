import { z } from 'zod'

export const company: z.ZodString = z.string().max(255, { message: '50文字以内で入力してください' })

export const name: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .max(255, { message: '20文字以内で入力してください' })

export const kana: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .max(255, { message: '20文字以内で入力してください' })

export const email: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .max(255, { message: '255文字以内で入力してください' })
  .email({ message: 'メールアドレスの形式で入力してください' })

export const phoneNumber: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .min(10, { message: '電話番号を入力してください' })
  .max(14, { message: '入力値が長すぎます' })

export const contactType: z.ZodString = z
  .string()
  .max(256, { message: '入力値が長すぎます' })

export const contact: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .max(512, { message: '入力値が長すぎます' })
