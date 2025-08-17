'use client'

import { useNewsApi } from '@/api/newsApi'
import { Heading } from '@/lf-components/Heading'
import { useStore } from '@/store/useStore'

export const NewsView = () => {
  const domainStore = useStore('domain')
  const { getNews } = useNewsApi(domainStore.getItem()?.replace(/^"(.*)"$/, '$1') as string)
  const news = getNews.data
  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='お知らせ管理' />
      <table>
        <thead>
          <th>id</th>
          <th>タイトル</th>
        </thead>
        <tbody>
          {news?.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
