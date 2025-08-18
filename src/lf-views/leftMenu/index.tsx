'use client'

import { cn } from '@/lf-components/utils'
import Link from 'next/link'

export const LeftMenuView = (props: { url: string }) => {
  const menus: { label: string; url: string }[] = [
    {
      label: 'ドメイン管理',
      url: '/domains',
    },
    {
      label: 'お知らせ管理',
      url: '/news',
    },
    {
      label: 'カテゴリ管理',
      url: '/categories',
    },
  ]

  return (
    <div className='flex flex-col w-full'>
      {menus.map((menu, index) => {
        return (
          <Link
            href={menu.url}
            key={index}
            className={cn('w-full', props.url === menu.url ? 'bg-blue-400' : 'hover:bg-blue-100')}
          >
            <div className={cn('p-2 flex border-b border-gray-500')}>{menu.label}</div>
          </Link>
        )
      })}
    </div>
  )
}
