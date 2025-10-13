'use client'

import { Heading } from '@/components/Heading'
import { TextFieldForm } from '@/templates/form/TextFieldForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/Button'

import { TextAreaForm } from '@/templates/form/TextAreaForm'
import { useState } from 'react'
import { s3Upload } from '@/api/s3Upload'
import { FileType } from '@/domain/file'
import { ImageUploadForm } from '@/templates/form/ImageUploadForm'
import { DateFieldForm } from '@/templates/form/DateFieldForm'
import { EventSchema, EventType } from '@/domain/event'
import { useEventApi } from '@/api/eventApi'

export const EventCreateView = () => {
  const { addEvent } = useEventApi()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const onClickHandler = async (data: EventType) => {
    await addEvent.mutateAsync(data).then((res) => {
      try {
        if (res.data.img.length > 0 && selectedFile) {
          const uploadFiles: FileType[] = res.data.img.map(
            (item) =>
              ({
                fileName: item,
                file: selectedFile,
              } as FileType),
          )
          s3Upload(uploadFiles)
          window.alert('CREATED!!')
        }
      } catch (error) {
        window.alert(`エラーが発生しました。[${error}]`)
      }
    })
  }

  // ファイルが選択されたときに呼び出されるハンドラ
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = event.target.files
    if (targetFiles && targetFiles.length > 0) {
      setSelectedFile(targetFiles[0])
      setValue('img', [targetFiles[0].name])
    }
  }

  const defaultValues: EventType = {
    title: '',
    placeName: '',
    date: '',
    openTime: null,
    startTime: null,
    img: [],
    ticketUrl: [],
    context: '',
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<EventType>({
    mode: 'onChange',
    resolver: zodResolver(EventSchema),
    defaultValues,
  })

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='イベント作成' />
      <form onSubmit={handleSubmit((e) => onClickHandler(e))}>
        <div className='flex flex-col gap-4'>
          <ImageUploadForm
            title='画像アップロード'
            error={errors.img?.message}
            onChange={handleFileChange}
          />
          <TextFieldForm
            title='タイトル'
            required
            placeholder='タイトル'
            register={register('title')}
            error={errors.title?.message}
          />
          <DateFieldForm
            title='開催日'
            onChange={(value) => {
              setValue('date', value?.format('YYYY/MM/DD') ?? null)
            }}
          />
          <div className='flex gap-2'>
            <TextFieldForm
              title='開場'
              placeholder='hh:mm'
              register={register('openTime')}
              error={errors.openTime?.message}
            />
            <TextFieldForm
              title='開演'
              placeholder='hh:mm'
              register={register('startTime')}
              error={errors.startTime?.message}
            />
          </div>
          <TextFieldForm
            title='チケット'
            placeholder='hh:mm'
            register={register('ticketUrl')}
            error={errors.ticketUrl?.message}
          />
          <TextAreaForm
            title='概要'
            required
            placeholder=''
            register={register('context')}
            error={errors.context?.message}
          />

          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
