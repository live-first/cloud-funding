'use client'

import { Heading } from '@/lf-components/Heading'

export const NewsView = () => {
  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='お知らせ管理' />
      <table>
        <thead>
          <th>#</th>
          <th>タイトル</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}
