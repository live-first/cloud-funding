'use client'

import { useDomainApi } from '@/api/domainApi'
import { Header } from '@/lf-templates/header'
import Link from 'next/link'
import { HiOutlineUser, HiOutlineCog } from 'react-icons/hi'
import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { MenuItem, Select } from '@mui/material'

export const GlobalHeader = () => {

  const DomainSelect = () => {
    const { getDomains } = useDomainApi()
    const domains = getDomains.data
    const store = useStore('domain')
    const initValue =
      domains?.find((item) => item.domain === store.getItem()?.replace(/^"(.*)"$/, '$1'))?.id ?? 0
    const [domain, setDomain] = useState<number>(initValue)

    return (
      <div>
        <Select
          id='domain'
          value={domain}
          label='ドメイン'
          onChange={(e) => {
            store.setItem(domains?.find((domain) => domain.id === e.target.value)?.domain as string)
            setDomain(e.target.value)
          }}
        >
          <MenuItem value={0}>選択してください</MenuItem>
          {domains?.map((domain, index) => (
            <MenuItem value={domain.id} key={index}>
              {domain.domain}
            </MenuItem>
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
