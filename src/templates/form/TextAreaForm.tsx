import React from 'react'
import { FormField, FormFieldProps } from '.'
import { UseFormRegisterReturn } from 'react-hook-form'

type TextAreaProps = FormFieldProps & {
  placeholder?: string
  register: UseFormRegisterReturn
}

export const TextAreaForm = (props: TextAreaProps) => {
  const { title, required, description, placeholder, error, register } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <textarea
        className={`
          w-full px-4 py-3 rounded-xl bg-white border border-gray-200 
          text-gray-700 placeholder-gray-400 min-h-36
          focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent
          transition-all resize-none
          ${error ? 'border-red-400 focus:ring-red-200' : ''}
        `}
        placeholder={placeholder}
        {...register}
      />
    </FormField>
  )
}