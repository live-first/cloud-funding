'use client'

import { Img } from '@/components/Image'
import './style.css'
import top from '@/data/image/top.jpeg'
import x from '@/data/image/x-logo.png'
import insta from '@/data/image/insta-logo.png'
import tiktok from '@/data/image/tiktok-logo.png'
import { cn } from '@/components/utils'
import { RiMoneyCnyCircleFill } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa6'
import { FaClock, FaLink } from 'react-icons/fa'
import Link from 'next/link'
import { useHomePresenter } from '@/presenter/homePresenter'

export const TopView = () => {
  return (
    <div className='flex flex-col pb-12'>
      <SummaryView />
      <AnthorLinkButton />
    </div>
  )
}

const SummaryView = () => {
  const { grandTotal, supporterTotal } = useHomePresenter()
  // 目標金額
  const goal = 10000000
  // 現在の支援総額
  const current = grandTotal
  // 支援者数
  const people = supporterTotal
  // 締切日時
  const deadline = new Date(2025, 11, 30, 0, 0, 0)

  const rate = current / goal
  const viewRate = (rate * 100).toFixed(1)

  const now = new Date()
  const restDay = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className='flex flex-wrap justify-center gap-4 px-6 pb-6'>
      <div className='flex w-full sm:w-2/3'>
        <Img src={top.src} cName='rounded-3xl' />
      </div>

      <div className='flex flex-col bg-white gap-6 p-4 w-full sm:w-[400px] rounded-3xl'>
        <div className='flex flex-col gap-3'>
          <p className='flex font-bold text-lg'>
            <RiMoneyCnyCircleFill style={{ transform: 'translateY(3px)', marginRight: '4px' }} />{' '}
            現在の支援総額
          </p>
          <p className='font-bold text-gray-800 text-4xl'>
            {current.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-3xl text-gray-800'>
            {viewRate}
            <span className='text-2xl ml-1'>%</span>
          </p>
          {/* インジケータ */}
          <div className='w-full h-6 bg-gray-400 rounded-full relative'>
            <div
              className={cn(
                'absolute top-0 h-6 rounded-full indicator',
                rate > 0.8 ? 'high-rate' : rate > 0.5 ? 'middle-rate' : 'low-rate',
              )}
              style={{ width: rate >= 1 ? '100%' : `${viewRate}%` }}
            ></div>
          </div>
          <p className='text-end w-full'>目標金額：{goal.toLocaleString()}円</p>
        </div>

        <div className='flex md:flex-col md:gap-6'>
          <div className='flex flex-col gap-3 w-1/2 md:w-full'>
            <p className='flex font-bold text-lg'>
              <FaUsers style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
              支援者数
            </p>
            <p className='font-bold text-gray-800 text-4xl'>
              {people.toLocaleString()}
              <span className='text-2xl ml-1'>人</span>
            </p>
          </div>
          <div className='flex flex-col gap-3 w-1/2 md:w-full'>
            {restDay >= 0 && (
              <>
                <p className='flex font-bold text-lg'>
                  <FaClock style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
                  終了まで残り
                </p>
                <p className='font-bold text-gray-800 text-4xl'>
                  {restDay.toLocaleString()}
                  <span className='text-2xl ml-1'>日</span>
                </p>
              </>
            )}
          </div>
        </div>
        {restDay < 0 && (
          <div className='flex flex-col w-full py-2 bg-gray-700 text-white font-bold items-center'>
            本プロジェクトは終了しました
          </div>
        )}

        <div className='flex flex-col gap-3'>
          <p className='flex font-bold text-lg'>
            <FaLink style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
            SNS
          </p>
          <div className='flex gap-12 justify-center'>
            <Link href='https://www.tiktok.com/@rara____wwwww'>
              <Img src={tiktok.src} cName='h-12 w-12 relative' />
            </Link>
            <Link href='https://www.instagram.com/rara____wwwww'>
              <Img src={insta.src} cName='h-12 w-12 relative' />
            </Link>
            <Link href='https://x.com/rara____wwwww'>
              <Img src={x.src} cName='h-12 w-12 relative' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const AnthorLinkButton = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 px-6'>
      <Link href='#return' className='w-full sm:w-2/3 '>
        <div className='flex flex-col items-center py-2 rounded-xl bg-fuchsia-200'>
          <p className='text-3xl font-bold text-blue-500'>プロジェクトを支援する</p>
          <div className='text-3xl text-blue-500'>▼</div>
        </div>
      </Link>
      <div className='flex bg-blue-200 p-4 w-full sm:w-[400px]'>
        本サイトは当プロジェクト独自に作成しているため、支援金額の95%が開催者に支給されます。
      </div>
    </div>
  )
}
