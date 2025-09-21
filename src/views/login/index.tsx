'use client'

import { Button } from '@/components/Button'
import { Panel } from '@/components/Panel'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TextField } from '@mui/material'
import { AuthContents } from '@/domain/authentication'
import { useAuthApi } from '@/api/authApi'
import { useRouter } from 'next/navigation'
import { UserResponseType } from '@/domain/user'

export const LoginView = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const { checkAuth } = useAuthApi()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthContents>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<AuthContents> = (data: AuthContents) => {
    checkAuth.mutateAsync(data).then((res) => {
      if (res) {
        loginSuccess(res)
      } else {
        loginErrorMsg(res)
      }
      reset()
    })
  }

  // ログインに成功した場合、次のページへ遷移
  const loginSuccess = (data: UserResponseType) => {
    sessionStorage.setItem('user', JSON.stringify(data))
    sessionStorage.setItem('isLogined', 'true')
    router.push('/')
  }

  // ログインに失敗した場合のエラーメッセージをセット
  const loginErrorMsg = (error: string) => {
    //setErrorMsg()でerrorMsgの値を更新
    setErrorMsg(`${error}`)
  }

  return (
    <div className='flex flex-col gap-4 text-center items-center pt-12'>
      <h2 className='font-bold text-5xl'>ログイン</h2>
      <Panel className='flex flex-col gap-6 w-2xl' size='xl'>
        <div className='flex flex-col gap-1'>
          <TextField
            required
            fullWidth
            size='small'
            margin='dense'
            label='メールアドレス'
            autoComplete='current-email'
            placeholder='wakuwakuticket@example.com'
            {...register('email', {
              required: 'メールアドレスを入力してください。',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i,
                message: 'メールアドレスの形式が不正です。',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name='email'
            render={({ message }) => <div className='text-error text-start text-sm'>{message}</div>}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <TextField
            required
            fullWidth
            size='small'
            margin='dense'
            label='パスワード'
            type='password'
            autoComplete='current-password'
            placeholder='パスワードを入力してください'
            {...register('password', {
              required: 'パスワードを入力してください。',
            })}
          />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ message }) => <div className='text-error text-start text-sm'>{message}</div>}
          />
        </div>
        <div>
          <Button className='login-btn active' onClick={handleSubmit(onSubmit)} label='ログイン' />
        </div>
        <div className='errorMsg'>{errorMsg}</div>
      </Panel>
      {/* <div className='other-view'>
        アカウントを持っていない方は
        <Link href='/signUp'>こちら</Link>
      </div>
      <div className='other-view'>
        パスワードを忘れてしまった方は
        <Link href='/password'>こちら</Link>
      </div> */}
    </div>
  )
}
