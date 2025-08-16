'use client'

import { useDomainApi } from '@/api/domainApi'
import { Header } from '@/lf-templates/header'
import { useStore } from '@/store/useStore'
import { Select } from '@mui/material'
import Link from 'next/link'
import { HiOutlineUser, HiOutlineCog } from 'react-icons/hi'

export const GlobalHeader = () => {
  const DomainSelect = () => {
    const { getDomains } = useDomainApi()
    const store = useStore('domain')

    const domains = getDomains.data

    return (
      <div>
        <Select
          id='domain'
          value={store.getItem('domain')}
          label='Age'
          onChange={(e) => {
            store.setItem(e.target)
          }}
        >
          {domains?.map((domain, index) => (
            <option value={domain.id} key={index}>
              {domain.domain}
            </option>
          ))}
        </Select>
      </div>
    )
  }

  return (
    <Header
      left={<DomainSelect />}
      pcView={
        <div className='flex py-1 gap-3 bg-white pl-12 pr-3 rounded-l-full text-5xl'>
          <Link href='/'>
            <HiOutlineUser />
          </Link>
          <Link href='/'>
            <HiOutlineCog />
          </Link>
        </div>
      }
      spView={<div className='flex flex-col gap-6 pt-16 px-4'></div>}
    />
  )
}
