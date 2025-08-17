'use client'

import { useDomainApi } from '@/api/domainApi'
import { Domain } from '@/domain/domain'
import { Heading } from '@/lf-components/Heading'


export const DomainsView = () => {
  const { getDomains } = useDomainApi()

  const domains = getDomains.data as Domain[]
  return (
    <div className='flex flex-col p-6 gap-4'>
      <Heading tag={4} label='ドメイン管理' />
      <table>
        <thead>
          <th>id</th>
          <th>domain</th>
        </thead>
        <tbody>
          {domains?.map((domain, index) => (
            <tr key={index}>
              <th>{domain.id}</th>
              <td>{domain.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
