import React from 'react'
import { PropsWithChildren } from 'react'

export type FormFieldProps = {
  title?: string
  required?: boolean
  description?: string
  error?: string
}

export const FormField = (props: PropsWithChildren<FormFieldProps>) => {
  const { title, required, description, error, children } = props
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        {title && (
          <label className='text-lg' style={{ fontWeight: 700 }}>
            {title}
          </label>
        )}
        {required && (
          <span className='text-white text-sm bg-red-500 h-fit px-2 rounded-md'>必須</span>
        )}
      </div>
      {description && <p className='text-sm text-gray-500'>{description}</p>}
      {children}
      {error && <div className='text-red-500 text-sm'>{error}</div>}
    </div>
  )
}
