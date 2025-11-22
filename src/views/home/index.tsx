'use client'

import { Img } from '@/components/Image'
import './style.css'
import top from '@/data/image/top.jpeg'
import { cn } from '@/components/utils'

export const HomeView = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center header-gradient py-6'>
        <h1 className='font-bold text-4xl text-gray-700'>来桜アイドルプロデュース プロジェクト</h1>
      </div>

      <SummaryView />
    </div>
  )
}

const SummaryView = () => {
  const goal = 1000000
  const current = 50000

  const rate = current / goal
  return (
    <div className='flex flex-wrap justify-center gap-4 p-6'>
      <Img src={top.src} cName='w-2/3 rounded-3xl' />
      <div className='flex flex-col bg-white gap-6 p-4 w-[400px]'>
        <div className='flex flex-col gap-3'>
          <p>¥ 現在の支援総額</p>
          <p>
            99,999,999<span>円</span>
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-full h-4 bg-gray-400 rounded-full relative'>
            <div
              className={cn('absolute top-0 h-6')}
              style={{ width: rate >= 1 ? '100%' : `${rate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
