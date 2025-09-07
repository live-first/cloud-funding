import React from 'react'
import { FormField, FormFieldProps } from '.'

type TextAreaProps = FormFieldProps & {
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
}

export const TextAreaForm = (props: TextAreaProps) => {
  const { title, required, description, placeholder, error, register } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <textarea
        className={`border px-4 py-2 rounded-lg min-h-36 ${error && 'border border-red-500'}`}
        placeholder={placeholder}
        {...register}
      />
    </FormField>
  )
}
