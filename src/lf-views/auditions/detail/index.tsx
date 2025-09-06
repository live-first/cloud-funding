'use client'

import { useAuditionApi } from '@/api/auditionsApi'
import { auditionCategoryToString } from '@/domain/enum/AuditionCategory'
import { regionToString } from '@/domain/enum/Region'
import { Status, statusToString } from '@/domain/enum/Status'
import { Button } from '@/lf-components/Button'
import { Heading } from '@/lf-components/Heading'
import { SelectForm } from '@/lf-templates/form/SelectForm'
import Link from 'next/link'
import { PropsWithChildren, useState } from 'react'

export const AuditionDetailView = (params: { id: number }) => {
  const { getAudition, updateStatus } = useAuditionApi(params.id)
  const item = getAudition.data
  const [status, setStatus] = useState<string>(item?.status ?? '')

  const onClickHandler = () => {
    updateStatus.mutateAsync({ id: params.id, status: status }).then(() => {
      window.alert('UPDATED!!')
      getAudition.refetch()
    })
  }

  const Section = (props: PropsWithChildren) => {
    return <div className='flex flex-col gap-2'>{props.children}</div>
  }

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='オーディション詳細' />
      <div className=''>{statusToString(item?.status)}</div>
      <div className='flex flex-col gap-6'>
        <Section>
          <Heading tag={5} label='タイトル' />
          <label>{item?.title}</label>
        </Section>
        <Section>
          <Heading tag={5} label='サブタイトル' />
          <label>{item?.subtitle}</label>
        </Section>
        <Section>
          <Heading tag={5} label='締切日時' />
          <label>{item?.deadline}</label>
        </Section>
        <Section>
          <Heading tag={5} label='カテゴリ' />
          <label>{auditionCategoryToString(item?.auditionCategory)}</label>
        </Section>
        <Section>
          <Heading tag={5} label='概要' />
          <label className='whitespace-pre-wrap' style={{ whiteSpace: 'pre-wrap' }}>
            {item?.outline}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='主な活動地域' />
          <label>{regionToString(item?.region)}</label>
        </Section>
        <Section>
          <Heading tag={5} label='エントリー方法' />
          <label className='whitespace-pre-wrap' style={{ whiteSpace: 'pre-wrap' }}>
            {item?.entryMethod}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='応募資格' />
          <label className='whitespace-pre-wrap' style={{ whiteSpace: 'pre-wrap' }}>
            {item?.requirements}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='選考フロー' />
          <label className='whitespace-pre-wrap' style={{ whiteSpace: 'pre-wrap' }}>
            {item?.flow}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='担当者名' />
          <label>{item?.name}</label>
        </Section>
        <Section>
          <Heading tag={5} label='電話番号' />
          <label>{item?.phoneNumber}</label>
        </Section>
        <Section>
          <Heading tag={5} label='メールアドレス' />
          <label>{item?.email}</label>
        </Section>
        <Section>
          <Heading tag={5} label='所属組織名' />
          <label>{item?.organizer}</label>
        </Section>
        <Section>
          <Heading tag={5} label='HP' />
          {item?.hp && <Link href={item?.hp}>{item?.hp}</Link>}
        </Section>
      </div>
      <div className='flex flex-col py-4 gap-2'>
        <SelectForm
          title='ステータス'
          required
          id='status'
          options={[
            {
              value: Status.PUBLIC,
              label: '承認・公開',
            },
            {
              value: Status.REJECT,
              label: '差戻・却下',
            },
            {
              value: Status.REPUBLIC,
              label: '非公開',
            },
          ]}
          onChange={(e) => {
            setStatus(e.target.value)
          }}
        />
        <Button
          label='ステータス変更'
          type='submit'
          disabled={status === ''}
          onClick={onClickHandler}
        />
      </div>
    </div>
  )
}
