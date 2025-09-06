'use client'

import { useAuditionApi } from '@/api/auditionsApi'
import { Button } from '@/lf-components/Button'
import { Heading } from '@/lf-components/Heading'
import Link from 'next/link'

export const AuditionsView = () => {
  const { getAuditions } = useAuditionApi()
  const auditions = getAuditions.data

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='オーディション管理' />
      <div className='flex'>
        <Link href='/auditions/create' className='w-20'>
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
              <td>{item.status}</td>
              <td>{item.organizer}</td>
              <td>{item.name}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
