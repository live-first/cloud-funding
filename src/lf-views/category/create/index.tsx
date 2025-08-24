'use client'

import { Heading } from '@/lf-components/Heading'
import { TextFieldForm } from '@/lf-templates/form/TextFieldForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/lf-components/Button'
import { CategorySchema, CategoryType } from '@/domain/category'
import { useCategoryApi } from '@/api/categoryApi'

export const CategoryCreateView = () => {
  const { addCategory } = useCategoryApi()

  const onClickHandler = (data: CategoryType) => {
    addCategory.mutateAsync(data.label).then(() => {
      window.alert('CREATED!!')
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CategoryType>({
    mode: 'onChange',
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      id: null,
      label: '',
    },
  })
  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='カテゴリ作成' />
      <form onSubmit={handleSubmit(onClickHandler)}>
        <div className='flex flex-col gap-4'>
          <TextFieldForm
            title='ラベル'
            required
            placeholder='ラベル'
            register={register('label')}
            error={errors.label?.message}
          />
          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
