'use client'

import { useNewsApi } from '@/api/newsApi'
import { Heading } from '@/lf-components/Heading'
import { TextFieldForm } from '@/lf-templates/form/TextFieldForm'
import { useStore } from '@/store/useStore'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/lf-components/Button'
import { context, datetime, stringArray, title } from '@/domain/schema'
import { TextAreaForm } from '@/lf-templates/form/TextAreaForm'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const NewsCreateView = () => {
  const domainStore = useStore('domain')
  const { addNews } = useNewsApi(domainStore.getItem()?.replace(/^"(.*)"$/, '$1') as string)
  const NewsSchema = z.object({
    title: title,
    context: context,
    domains: stringArray,
    open: datetime,
    close: datetime,
    category: stringArray,
  })

  type NewsType = z.infer<typeof NewsSchema>

  const onClickHandler = async (data: NewsType) => {
    addNews.mutate(data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<NewsType>({
    mode: 'onChange',
    resolver: zodResolver(NewsSchema),
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
          <DateTimePicker label="公開日時" />
          <DateTimePicker label="非公開日時" />
          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
