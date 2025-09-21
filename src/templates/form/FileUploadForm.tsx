import React, { ChangeEventHandler } from 'react'
import { FormField, FormFieldProps } from '.'
import { FileUpload } from '@/components/FileUpload'

type FileUploadProps = FormFieldProps & {
  onChange: ChangeEventHandler
}

export const FileUploadForm = (props: FileUploadProps) => {
  const { title, required, description, error, onChange } = props
  return (
    <FormField title={title} required={required} description={description} error={error}>
      <FileUpload onChange={onChange} />
    </FormField>
  )
}
