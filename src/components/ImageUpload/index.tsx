import React, { useState, ChangeEventHandler } from 'react'
import { Img } from '../Image'

type ImageUploadProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const ImageUpload = (props: ImageUploadProps) => {
  const { onChange } = props
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // 選択した画像のURLを作成
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
    }
    // 親に通知（必要なら）
    onChange?.(e)
  }

  return (
    <div className='preview-upload'>
      <label className='upload-btn'>
        ファイルを選択
        <input
          type='file'
          className='hidden'
          id='fileInput'
          onChange={handleChange}
          accept='image/*'
        />
      </label>

      {previewUrl && (
        <div className='preview mt-2'>
          <Img src={previewUrl} alt='プレビュー' cName='max-w-[200px] rounded-lg shadow-md' />
        </div>
      )}
    </div>
  )
}
