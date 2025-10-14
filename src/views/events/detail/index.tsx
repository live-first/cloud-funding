'use client'

import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import { PropsWithChildren } from 'react'
import { useEventApi } from '@/api/eventApi'
import { EventType } from '@/domain/event'

export const EventDetailView = (params: { id: number }) => {
  const { getEvent } = useEventApi(params.id)
  const item = getEvent.data as EventType

  const Section = (props: PropsWithChildren) => {
    return <div className='flex flex-col gap-2'>{props.children}</div>
  }

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='イベント詳細' />
      <div className=''></div>
      <div className='flex flex-col gap-6'>
        <Section>
          {item?.img && (
            <Img src={`https://livefirst.s3.ap-northeast-1.amazonaws.com/${item?.img[0]}`} alt='' />
          )}
        </Section>
        <Section>
          <Heading tag={5} label='タイトル' />
          <label>{item?.title}</label>
        </Section>
        <Section>
          <Heading tag={5} label='会場' />
          <label>{item?.placeName}</label>
        </Section>
        <Section>
          <Heading tag={5} label='開催日' />
          <label>{item.date}</label>
        </Section>
        <Section>
          <Heading tag={5} label='開場 / 開演' />
          <label>
            {item.openTime} / {item.startTime}
          </label>
        </Section>
        <Section>
          <Heading tag={5} label='内容' />
          {item.context}
        </Section>
        <Section>
          <Heading tag={5} label='チケット' />
          {item.ticketUrl}
        </Section>
      </div>
    </div>
  )
}
