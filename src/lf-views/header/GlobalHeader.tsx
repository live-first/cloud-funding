import { Header } from '@/lf-templates/header'
import Link from 'next/link'
import { HiOutlineUser, HiOutlineCog } from 'react-icons/hi'

export const GlobalHeader = () => {
  return (
    <Header
      left={<div></div>}
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
