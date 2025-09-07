'use client'

import { useCategoryApi } from '@/api/categoryApi'
import { useNewsApi } from '@/api/newsApi'
import { Button } from '@/lf-components/Button'
import { Heading } from '@/lf-components/Heading'
import { useStore } from '@/store/useStore'
import { formatDate, removeQuotation } from '@/utils/stringUtils'
import Link from 'next/link'

export const NewsView = () => {
  const domainStore = useStore('domain')
  const { getNews } = useNewsApi(removeQuotation(domainStore.getItem() as string))
  const news = getNews.data
  const { getCategories } = useCategoryApi()

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='お知らせ管理' />
      <div className='flex'>
        <Link href='/news/create' className='w-20'>
          <Button label='作成' />
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>domains</th>
            <th>状態</th>
            <th>カテゴリ</th>
            <th>作成日時</th>
            <th>更新日時</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                {item.domains.map((domain, index) => (
                  <span key={index}>{domain}</span>
                ))}
              </td>
              <td></td>
              <td>
                {item.category?.map((cate, index) => (
                  <span key={index}>
                    {getCategories.data?.find((gCate) => gCate.id === Number(cate))?.label}
                  </span>
                ))}
              </td>
              <td>{formatDate(item.createdAt, 'YYYY/MM/DD hh:mm')}</td>
              <td>{formatDate(item.updatedAt, 'YYYY/MM/DD hh:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
