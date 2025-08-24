'use client'

import { useCategoryApi } from '@/api/categoryApi'
import { Button } from '@/lf-components/Button'
import { Heading } from '@/lf-components/Heading'
import Link from 'next/link'

export const CategoriesView = () => {
  const { getCategories } = useCategoryApi()

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='カテゴリ管理' />
      <div className='flex'>
        <Link href='/categories/create' className='w-20'>
          <Button label='作成' />
        </Link>
      </div>
      <table>
        <thead>
          <th>id</th>
          <th>ラベル</th>
        </thead>
        <tbody>
          {getCategories.data?.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <td>
                <Link href={`/categories/update?id=${item.id}`}>{item.label}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
