'use client'

import { Heading } from '@/components/Heading'
import { TextFieldForm } from '@/templates/form/TextFieldForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/Button'
import { CategorySchema, CategoryType } from '@/domain/category'
import { useCategoryApi } from '@/api/categoryApi'
import { useSearchParams } from 'next/navigation'

export const CategoryUpdateView = () => {
  const { updateCategory, getCategories } = useCategoryApi()
  const searchParams = useSearchParams()
  const getId = searchParams.get('id')

  const initLabel = getCategories.data?.find((cate) => cate.id === Number(getId))

  const onClickHandler = (data: CategoryType) => {
    updateCategory.mutateAsync(data).then(() => {
      window.alert('UPDATED!!')
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
      id: Number(getId) ?? null,
      label: initLabel?.label ?? '',
    },
  })

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='カテゴリ更新' />
      <form onSubmit={handleSubmit(onClickHandler)}>
        <div className='flex flex-col gap-4'>
          <TextFieldForm
            title='ラベル'
            required
            placeholder={initLabel?.label}
            register={register('label')}
            error={errors.label?.message}
          />
          <Button label='更新する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
