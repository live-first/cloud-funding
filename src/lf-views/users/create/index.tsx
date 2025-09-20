'use client'

import { Heading } from '@/lf-components/Heading'
import { TextFieldForm } from '@/lf-templates/form/TextFieldForm'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/lf-components/Button'
import { SelectForm } from '@/lf-templates/form/SelectForm'
import { DateTimePickerForm } from '@/lf-templates/form/DateTimePickerForm'
import { UserSchema, UserType } from '@/domain/user'
import { useUserApi } from '@/api/userApi'
import { AccountType } from '@/domain/enum/AccountType'
import { SexType } from '@/domain/enum/SexType'

export const UsersCreateView = () => {
  const { addUser } = useUserApi()

  const onClickHandler = async (data: UserType) => {
    await addUser.mutateAsync(data).then(() => {
      try {
        window.alert('CREATED!!')
      } catch (error) {
        window.alert(`エラーが発生しました。[${error}]`)
      }
    })
  }

  const defaultValues: UserType = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    sex: '',
    phoneNumber: '',
    password: '',
    isAgreed: true,
    userType: AccountType.GENERAL,
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserType>({
    mode: 'onChange',
    resolver: zodResolver(UserSchema),
    defaultValues,
  })

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='ユーザー作成' />
      <form onSubmit={handleSubmit((e) => onClickHandler(e))}>
        <div className='flex flex-col gap-4'>
          <TextFieldForm
            title='ユーザー名'
            required
            description='何でもOK（ニックネームなど）'
            placeholder='ユーザー名'
            register={register('username')}
            error={errors.username?.message}
          />
          <TextFieldForm
            title='メールアドレス'
            required
            description='ログイン時に必要'
            placeholder='xxx@domain.com'
            register={register('email')}
            error={errors.email?.message}
          />
          <TextFieldForm
            title='パスワード'
            required
            type='password'
            description='ログイン時に必要'
            register={register('password')}
            error={errors.password?.message}
          />
          <div className='flex'>
            <TextFieldForm
              title='名字'
              required
              placeholder='山田'
              register={register('firstName')}
              error={errors.firstName?.message}
            />
            <TextFieldForm
              title='名前'
              required
              placeholder='太郎'
              register={register('lastName')}
              error={errors.lastName?.message}
            />
          </div>
          <TextFieldForm
            title='電話番号'
            required
            placeholder='03xxxx1234'
            register={register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
          <DateTimePickerForm
            title='誕生日'
            onChange={(value) => {
              setValue('birthDay', value?.format('YYYY-MM-DDTHH:mm:ss') ?? null)
            }}
          />
          <SelectForm
            title='性別'
            required
            error={errors.sex?.message}
            id='1'
            options={[
              {
                value: SexType.MEN,
                label: '男性',
              },
              {
                value: SexType.LADY,
                label: '女性',
              },
              {
                value: SexType.OTHER,
                label: 'その他',
              },
            ]}
            onChange={(e) => {
              setValue('sex', e.target.value)
            }}
          />
          <SelectForm
            title='権限'
            required
            description='ユーザータイプを選択してください。'
            error={errors.userType?.message}
            id='1'
            options={[
              {
                value: AccountType.GENERAL,
                label: '一般',
              },
              {
                value: AccountType.MEMBER,
                label: 'メンバー',
              },
              {
                value: AccountType.MANAGEMENT,
                label: '管理者',
              },
              {
                value: AccountType.ADMIN,
                label: '開発者',
              },
            ]}
            onChange={(e) => {
              setValue('userType', e.target.value)
            }}
          />
          <Button label='作成する' type='submit' disabled={!isValid || isSubmitting} />
        </div>
      </form>
    </div>
  )
}
