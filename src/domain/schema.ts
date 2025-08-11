import { z } from 'zod'

export const title: z.ZodString = z.string().max(40, { message: '40文字以内で入力してください' })

export const company: z.ZodString = z.string().max(50, { message: '50文字以内で入力してください' })

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
  .max(255, { message: '100文字以内で入力してください' })
  .email({ message: 'メールアドレスの形式で入力してください' })

export const group_name: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .max(100, { message: '60文字以内で入力してください' })

export const phoneNumber: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .min(10, { message: '電話番号を入力してください' })
  .max(11, { message: '入力値が長すぎます' })
  .regex(/^0[3789]([0-9]{8}|[0-9]{9})$/, { message: '電話番号の形式が不正です' })

export const member_num = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .transform((v) => Number(v))
  .refine((v) => !isNaN(v), { message: '数値で入力してください' })

export const mic_num = z
  .string()
  .min(1, '入力が必須の項目です')
  .transform((v) => Number(v))
  .refine((v) => !isNaN(v), { message: '数値で入力してください' })

export const url: z.ZodString = z
  .string()
  .min(1, { message: '入力が必須の項目です' })
  .url({ message: 'URLの形式で入力してください' })

export const contactType: z.ZodString = z.string().max(256, { message: '入力値が長すぎます' })

export const freeword: z.ZodString = z
  .string()
  .max(512, { message: '入力値が長すぎます' })

export const live: z.ZodArray<z.ZodString> = z
  .array(z.string())
  .min(3, { message: '3つ以上選択してください' })
  .max(10, { message: '出演は最大10回までとなります' })
