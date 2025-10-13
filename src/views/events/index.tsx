'use client'

import { useAuditionApi } from '@/api/auditionsApi'
import { Status, statusToString } from '@/domain/enum/Status'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { formatDate } from '@/utils/stringUtils'
import Link from 'next/link'

export const EventsView = () => {
  const { getAuditions } = useAuditionApi()
  const auditions = getAuditions.data

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
            <th>ステータス</th>
            <th>組織</th>
            <th>担当者</th>
            <th>作成日時</th>
            <th>更新日時</th>
          </tr>
        </thead>
        <tbody>
          {auditions?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <Link href={`/auditions/${item.id}`}>{item.title}</Link>
              </td>
              <td>
                <Badge size='sm' theme={statusToTheme(item.status)}>
                  {statusToString(item.status)}
                </Badge>
              </td>
              <td>{item.organizer}</td>
              <td>{item.name}</td>
              <td>{formatDate(item.createdAt, 'YYYY/MM/DD hh:mm')}</td>
              <td>{formatDate(item.updatedAt, 'YYYY/MM/DD hh:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const statusToTheme = (key?: string) => {
  return key === Status.DRAFT
    ? 'attention'
    : key === Status.REVIEW
    ? 'attention'
    : key === Status.PUBLIC
    ? 'info'
    : key === Status.REJECT
    ? 'error'
    : key === Status.REPUBLIC
    ? 'error'
    : 'info'
}
