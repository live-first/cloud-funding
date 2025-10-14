'use client'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import { useEventApi } from '@/api/eventApi'
import { EventType } from '@/domain/event'

export const EventsView = () => {
  const { getEvents } = useEventApi()
  const events = getEvents.data as EventType[]

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='イベント管理' />
      <div className='flex'>
        <Link href='/events/create' className='w-20'>
          <Button label='作成' />
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>開催日</th>
            <th>会場</th>
            <th>開場</th>
            <th>開演</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <Link href={`/events/${item.id}`}>{item.title}</Link>
              </td>
              <td>{item.placeName}</td>
              <td>{item.date}</td>
              <td>{item.openTime}</td>
              <td>{item.startTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
