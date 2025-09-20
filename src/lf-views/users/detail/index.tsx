'use client'

import { Heading } from '@/lf-components/Heading'
import { PropsWithChildren } from 'react'
import { useUserApi } from '@/api/userApi'

export const UsersDetailView = (params: { id: number }) => {
  const { getUser } = useUserApi(params.id)
  const item = getUser.data

  const Section = (props: PropsWithChildren) => {
    return <div className='flex flex-col gap-2'>{props.children}</div>
  }

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='ユーザー詳細' />
      <div className='flex flex-col gap-6'>
        <Section>
          <Heading tag={5} label='ユーザー名' />
          <label>{item?.username}</label>
        </Section>
        <Section>
          <Heading tag={5} label='名前' />
          <label>
            {item?.firstName} {item?.lastName}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='メール' />
          {item?.email}
        </Section>
        <Section>
          <Heading tag={5} label='誕生日' />
          <label>{item?.birthDay}</label>
        </Section>
        <Section>
          <Heading tag={5} label='性別' />
          {item?.sex}
        </Section>
        <Section>
          <Heading tag={5} label='電話番号' />
          <label>{item?.phoneNumber}</label>
        </Section>
      </div>
    </div>
  )
}
