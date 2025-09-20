'use client'

import { useUserApi } from '@/api/userApi'
import { Button } from '@/lf-components/Button'
import { Heading } from '@/lf-components/Heading'
import { formatDate } from '@/utils/stringUtils'
import Link from 'next/link'

export const UsersView = () => {
  const { getUsers } = useUserApi()
  const users = getUsers.data

  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='ユーザー管理' />
      <div className='flex'>
        <Link href='/users/create' className='w-20'>
          <Button label='作成' />
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>ユーザー名</th>
            <th>email</th>
            <th>名前</th>
            <th>更新日時</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <Link href={`/users/${item.id}`}>{item.username}</Link>
              </td>
              <td>{item.email}</td>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{formatDate(item.updatedAt, 'YYYY/MM/DD hh:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
