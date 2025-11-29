import React from 'react'
import { FormField, FormFieldProps } from '.'
import { UseFormRegisterReturn } from 'react-hook-form'

type TextFieldProps = FormFieldProps & {
  placeholder?: string
  // 型を厳密にします
  register: UseFormRegisterReturn
  type?: string
  value?: string | number | null
}

export const TextFieldForm = (props: TextFieldProps) => {
  const { title, required, description, placeholder, error, type = 'text', register } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <input
        className={`
          w-full px-4 py-3 rounded-xl bg-white border border-gray-200 
          text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent
          transition-all
          ${error ? 'border-red-400 focus:ring-red-200' : ''}
        `}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </FormField>
  )
}