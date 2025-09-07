'use client'

import { useNewsApi } from '@/api/newsApi'
import { Heading } from '@/lf-components/Heading'
import { TextFieldForm } from '@/lf-templates/form/TextFieldForm'
import { useStore } from '@/store/useStore'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/lf-components/Button'

import { TextAreaForm } from '@/lf-templates/form/TextAreaForm'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { NewsRequestType, NewsSchema } from '@/domain/news'
import { SelectForm } from '@/lf-templates/form/SelectForm'
import { useDomainApi } from '@/api/domainApi'
import { Options } from '@/lf-components/Select'
import { useCategoryApi } from '@/api/categoryApi'
import { FileUploadForm } from '@/lf-templates/form/FileUploadForm'
import { useState } from 'react'
import { FileType } from '@/domain/file'
import { s3Upload } from '@/api/s3Upload'

export const NewsCreateView = () => {
  const domainStore = useStore('domain')
  const { addNews } = useNewsApi(domainStore.getItem()?.replace(/^"(.*)"$/, '$1') as string)
  const { getDomains } = useDomainApi()
  const { getCategories } = useCategoryApi()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const onClickHandler = (data: NewsRequestType) => {
    addNews.mutateAsync(data).then((res) => {
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

  const defaultValues: NewsRequestType = {
    title: '',
    context: '',
    img: [],
    files: [],
    domains: [],
    open: null,
    close: null,
    category: [],
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<NewsRequestType>({
    mode: 'onChange',
    resolver: zodResolver(NewsSchema),
    defaultValues,
  })

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='お知らせ作成' />
      <form onSubmit={handleSubmit((e) => onClickHandler(e))}>
        <div className='flex flex-col gap-4'>
          <TextFieldForm
            title='タイトル'
            required
            placeholder='タイトル'
            register={register('title')}
            error={errors.title?.message}
          />
          <TextAreaForm
            title='本文'
            required
            placeholder='本文'
            register={register('context')}
            error={errors.context?.message}
          />
          <DateTimePicker
            label='公開日時'
            onChange={(value) => {
              setValue('open', value?.format('YYYY-MM-DDTHH:mm:ss') ?? null)
            }}
          />
          <DateTimePicker
            label='非公開日時'
            onChange={(value) => {
              setValue('close', value?.format('YYYY-MM-DDTHH:mm:ss') ?? null)
            }}
          />
          <SelectForm
            title='ドメイン'
            required
            description='表示するサイトのドメインを選択してください。'
            error={errors.domains?.message}
            id='1'
            options={
              getDomains.data?.map((domain): Options => {
                return {
                  value: domain.domain,
                  label: domain.domain,
                }
              }) ?? []
            }
            onChange={(e) => {
              setValue('domains', [e.target.value])
            }}
          />
          <SelectForm
            title='カテゴリ'
            error={errors.category?.message}
            id='1'
            options={
              getCategories.data?.map((category): Options => {
                return {
                  value: category.id ?? 0,
                  label: category.label,
                }
              }) ?? []
            }
            onChange={(e) => {
              setValue('category', [Number(e.target.value)])
            }}
          />
          <FileUploadForm
            title='画像アップロード'
            error={errors.img?.message}
            onChange={handleFileChange}
          />
          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
