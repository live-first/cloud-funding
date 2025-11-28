import Link from 'next/link'
import './style.css'

export const SuccessView = () => {
  return (
    <div className='flex flex-col gap-12 items-center py-6'>
      <h2 className='text-4xl leading-8 font-bold text-emerald-400'>ご支援ありがとうございます。</h2>
      <Link href='/'>
        <div className='text-2xl gradient-btn p-4 rounded-full font-bold'>トップに戻る</div>
      </Link>
    </div>
  )
}
