import React from 'react'
import { FormField, FormFieldProps } from '.'

type TextFieldProps = FormFieldProps & {
  placeholder?: string
  register: any
  type?: string
}

export const TextFieldForm = (props: TextFieldProps) => {
  const { title, required, description, placeholder, error, type = 'text', register } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <input
        className={`border px-4 py-2 rounded-lg ${error && 'border border-red-500'}`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </FormField>
  )
}
