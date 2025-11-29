'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import './style.css'
import { FaHeart } from 'react-icons/fa'

export const SuccessView = () => {
  const store = useStore('return-items')

  // 完了画面が表示されたらカートを空にする
  useEffect(() => {
    store.clearItem()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12 px-4'>
      <div className='bg-white p-10 rounded-full shadow-xl shadow-pink-100 animate-bounce'>
        <FaHeart className='text-6xl text-pink-400' />
      </div>
      
      <div className='text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>
          ご支援<br className='md:hidden'/>ありがとうございます！
        </h2>
        <p className='text-gray-500 text-sm md:text-base leading-relaxed'>
          温かいご支援、心より感謝申し上げます。<br />
          リターンのお届けまで、楽しみにお待ちください。
        </p>
      </div>

      <Link href='/'>
        <div className='gradient-btn px-12 py-4 rounded-full font-bold text-white text-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:opacity-90'>
          トップに戻る
        </div>
      </Link>
    </div>
  )
}