import { ChangeEventHandler } from 'react'

type FileUploadProps = {
  onChange: ChangeEventHandler
}

export const FileUpload = (props: FileUploadProps) => {
  const { onChange } = props
  return <input type='file' onChange={onChange} />
}
