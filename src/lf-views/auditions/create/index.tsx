'use client'

import { Heading } from '@/lf-components/Heading'
import { TextFieldForm } from '@/lf-templates/form/TextFieldForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/lf-components/Button'

import { TextAreaForm } from '@/lf-templates/form/TextAreaForm'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { SelectForm } from '@/lf-templates/form/SelectForm'
import { useAuditionApi } from '@/api/auditionsApi'
import { AuditionSchema, AuditionType } from '@/domain/audition'
import { AuditionCategory } from '@/domain/enum/AuditionCategory'
import { Region } from '@/domain/enum/Region'
import { FileUploadForm } from '@/lf-templates/form/FileUploadForm'
import { useState } from 'react'
import { s3Upload } from '@/api/s3Upload'
import { FileType } from '@/domain/file'

export const AuditionCreateView = () => {
  const { addAudition } = useAuditionApi()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const onClickHandler = async (data: AuditionType) => {
    await addAudition.mutateAsync(data).then((res) => {
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

  const defaultValues: AuditionType = {
    title: '',
    subtitle: '',
    img: [],
    deadline: '',
    auditionCategory: AuditionCategory.IDOL,
    outline: '',
    region: Region.KANTO,
    entryMethod: '',
    tag: [],
    requirements: '',
    flow: '',
    name: '',
    phoneNumber: '',
    email: '',
    organizer: '',
    hp: '',
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AuditionType>({
    mode: 'onChange',
    resolver: zodResolver(AuditionSchema),
    defaultValues,
  })

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='オーディション作成' />
      <form onSubmit={handleSubmit((e) => onClickHandler(e))}>
        <div className='flex flex-col gap-4'>
          <TextFieldForm
            title='タイトル'
            required
            placeholder='タイトル'
            register={register('title')}
            error={errors.title?.message}
          />
          <TextFieldForm
            title='サブタイトル'
            placeholder='TIF出演実績ありなど'
            register={register('subtitle')}
            error={errors.subtitle?.message}
          />
          <DateTimePicker
            label='締切日時'
            onChange={(value) => {
              setValue('deadline', value?.format('YYYY-MM-DDTHH:mm:ss') ?? null)
            }}
          />
          <SelectForm
            title='カテゴリ'
            required
            description='カテゴリを選択してください。'
            error={errors.auditionCategory?.message}
            id='1'
            options={[
              {
                value: AuditionCategory.IDOL,
                label: 'アイドル',
              },
            ]}
            onChange={(e) => {
              setValue('auditionCategory', e.target.value)
            }}
          />
          <TextAreaForm
            title='概要'
            required
            placeholder=''
            register={register('outline')}
            error={errors.outline?.message}
          />
          <SelectForm
            title='主な活動地域'
            required
            description='活動地域を選択してください。'
            error={errors.region?.message}
            id='1'
            options={[
              {
                value: Region.HOKKAIDO,
                label: '北海道',
              },
              {
                value: Region.TOHOKU,
                label: '東北',
              },
              {
                value: Region.KANTO,
                label: '関東',
              },
              {
                value: Region.HOKURIKU,
                label: '北陸',
              },
              {
                value: Region.CHUBU,
                label: '中部',
              },
              {
                value: Region.KINKI,
                label: '近畿',
              },
              {
                value: Region.CHUGOKU,
                label: '中国',
              },
              {
                value: Region.SHIKOKU,
                label: '四国',
              },
              {
                value: Region.KYUSHU,
                label: '九州',
              },
              {
                value: Region.OKINAWA,
                label: '沖縄',
              },
            ]}
            onChange={(e) => {
              setValue('region', e.target.value)
            }}
          />
          <TextAreaForm
            title='エントリー方法'
            required
            placeholder=''
            register={register('entryMethod')}
            error={errors.entryMethod?.message}
          />
          <TextAreaForm
            title='応募資格'
            required
            placeholder=''
            register={register('requirements')}
            error={errors.requirements?.message}
          />
          <TextAreaForm
            title='選考フロー'
            required
            placeholder=''
            register={register('flow')}
            error={errors.flow?.message}
          />
          <FileUploadForm
            title='画像アップロード'
            error={errors.img?.message}
            onChange={handleFileChange}
          />
          <div className='border-b border-primary py-4'></div>
          ※掲載ページでは非表示の項目です。
          <TextFieldForm
            title='担当者名'
            required
            placeholder='山田　花子'
            register={register('name')}
            error={errors.name?.message}
          />
          <TextFieldForm
            title='電話番号'
            required
            placeholder='03xxxx1234'
            register={register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
          <TextFieldForm
            title='メールアドレス'
            required
            placeholder='xxx@domain.com'
            register={register('email')}
            error={errors.email?.message}
          />
          <TextFieldForm
            title='所属組織名'
            required
            placeholder='会社、団体名など'
            register={register('organizer')}
            error={errors.organizer?.message}
          />
          <TextFieldForm
            title='所属先HP'
            required
            placeholder='活動の存在がわかるもの'
            register={register('hp')}
            error={errors.hp?.message}
          />
          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
