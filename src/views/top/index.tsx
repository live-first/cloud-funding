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
import { FaClock, FaLink, FaHeart } from 'react-icons/fa'
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
    <div className='flex flex-wrap justify-center gap-6 px-4 md:px-6 pb-6'>
      <div className='flex w-full sm:w-2/3 shadow-pink-100 shadow-xl rounded-3xl overflow-hidden'>
        <Img src={top.src} cName='rounded-3xl hover:scale-105 transition-transform duration-700' />
      </div>

      <div className='flex flex-col bg-white/80 backdrop-blur-sm gap-6 p-6 w-full sm:w-[400px] rounded-3xl shadow-lg border border-pink-100'>
        <div className='flex flex-col gap-2'>
          <p className='flex font-bold text-lg text-gray-500'>
            <RiMoneyCnyCircleFill className="text-yellow-400 text-2xl" style={{ transform: 'translateY(0px)', marginRight: '6px' }} />{' '}
            現在の支援総額
          </p>
          <p className='font-bold text-pink-500 text-5xl tracking-tight'>
            {current.toLocaleString()}
            <span className='text-2xl ml-2 text-gray-400'>円</span>
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className="flex items-end gap-2">
            <p className='font-bold text-3xl text-gray-700'>
              {viewRate}
              <span className='text-xl ml-1'>%</span>
            </p>
          </div>
          {/* インジケータ */}
          <div className='w-full h-4 bg-gray-200 rounded-full relative overflow-hidden'>
            <div
              className={cn(
                'absolute top-0 h-4 rounded-full indicator',
                'bg-gradient-to-r from-pink-300 to-blue-300'
              )}
              style={{ width: rate >= 1 ? '100%' : `${viewRate}%` }}
            ></div>
          </div>
          <p className='text-end w-full text-xs text-gray-400'>目標金額：{goal.toLocaleString()}円</p>
        </div>

        <div className='flex md:flex-col md:gap-6 bg-blue-50 p-4 rounded-2xl'>
          <div className='flex flex-col gap-1 w-1/2 md:w-full'>
            <p className='flex font-bold text-sm text-gray-500'>
              <FaUsers className="text-blue-400" style={{ transform: 'translateY(2px)', marginRight: '6px' }} />
              支援者数
            </p>
            <p className='font-bold text-gray-700 text-3xl'>
              {people.toLocaleString()}
              <span className='text-lg ml-1'>人</span>
            </p>
          </div>
          <div className='flex flex-col gap-1 w-1/2 md:w-full'>
            {restDay >= 0 && (
              <>
                <p className='flex font-bold text-sm text-gray-500'>
                  <FaClock className="text-pink-400" style={{ transform: 'translateY(2px)', marginRight: '6px' }} />
                  終了まで残り
                </p>
                <p className='font-bold text-gray-700 text-3xl'>
                  {restDay.toLocaleString()}
                  <span className='text-lg ml-1'>日</span>
                </p>
              </>
            )}
          </div>
        </div>
        {restDay < 0 && (
          <div className='flex flex-col w-full py-2 bg-gray-400 text-white font-bold items-center rounded-lg'>
            本プロジェクトは終了しました
          </div>
        )}

        <div className='flex flex-col gap-3 mt-2'>
          <p className='flex font-bold text-lg text-gray-500 justify-center'>
            <FaLink className="text-gray-400" style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
            SNSをチェック
          </p>
          <div className='flex gap-8 justify-center'>
            <Link 
              href='https://www.tiktok.com/@rara____wwwww' 
              className="hover:scale-110 transition-transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Img src={tiktok.src} cName='h-12 w-12 relative drop-shadow-md' />
            </Link>
            <Link 
              href='https://www.instagram.com/rara____wwwww' 
              className="hover:scale-110 transition-transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Img src={insta.src} cName='h-12 w-12 relative drop-shadow-md' />
            </Link>
            <Link 
              href='https://x.com/rara____wwwww' 
              className="hover:scale-110 transition-transform"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Img src={x.src} cName='h-12 w-12 relative drop-shadow-md' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const AnthorLinkButton = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 px-6 mt-4'>
      <Link href='#return' className='w-full sm:w-2/3 group'>
        <div className='flex items-center justify-center py-4 rounded-full bg-gradient-to-r from-pink-200 to-blue-200 shadow-md group-hover:shadow-lg transition-all gap-2'>
          <FaHeart className="text-pink-400 bg-white rounded-full p-1 w-8 h-8 shrink-0" />
          
          <p className='text-lg md:text-2xl font-bold text-white drop-shadow-sm whitespace-nowrap'>
             プロジェクトを支援する
          </p>
          
          <div className='text-lg md:text-xl text-white animate-bounce shrink-0'>▼</div>
        </div>
      </Link>
      <div className='flex bg-blue-50 p-6 w-full sm:w-[400px] rounded-2xl text-sm text-gray-600 leading-relaxed border border-blue-100'>
        ※本サイトは当プロジェクト独自に作成しているため、支援金額の95%が開催者にそのまま支給されます。
      </div>
    </div>
  )
}