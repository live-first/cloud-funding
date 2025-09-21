import React, { ChangeEventHandler } from 'react'
import { FormField, FormFieldProps } from '.'
import { ImageUpload } from '@/components/ImageUpload'

type ImageUploadProps = FormFieldProps & {
  onChange: ChangeEventHandler
}

export const ImageUploadForm = (props: ImageUploadProps) => {
  const { title, required, description, error, onChange } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <ImageUpload onChange={onChange} />
    </FormField>
  )
}
