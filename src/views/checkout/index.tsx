'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '@/templates/form/CheckoutForm'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useStore } from '@/store/useStore'
import { ItemContent } from '../returns'
import { returnItems } from '@/data/items/returnItems'
import { useRouter } from 'next/navigation'

const stripePromise = loadStripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
)

export const CheckoutView = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const stored = useStore('return-items').getItem()
  const router = useRouter()

  useEffect(() => {
    const items = stored ? (JSON.parse(stored) as ItemContent[]) : []

    const amount =
      items?.reduce((sum, item) => {
        return sum + item.amount * Number(item.count)
      }, 0) ?? 0
    // ページロードで PaymentIntent 作成
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [stored])

  if (!clientSecret)
    return (
      <div>
        <DotLottieReact
          src='https://lottie.host/9f202484-3b8b-4612-97f4-f882bcc5765a/Cfy5D3cNkG.lottie'
          loop
          autoplay
        />
      </div>
    )

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <div className=''>
        <SummaryPanel />
        <CheckoutForm />
        <div className='max-w-md mx-auto p-4 space-y-4'>
          <button
            className='bg-gray-500 hover:bg-gray-400 text-white py-2 w-full rounded'
            onClick={() => {
              router.back()
            }}
          >
            戻る
          </button>
        </div>
      </div>
    </Elements>
  )
}

const SummaryPanel = () => {
  const stored = useStore('return-items').getItem()

  if (!stored) {
    return <div>データがありません</div>
  }
  const items = JSON.parse(stored) as ItemContent[]

  const totalAmount =
    items?.reduce((sum, item) => {
      return sum + item.amount * Number(item.count)
    }, 0) ?? 0

  return (
    <div className='max-w-md mx-auto p-4 space-y-4'>
      <h2 className='text-xl font-bold'>内容確認</h2>
      {items.map((item, index) => {
        const data = returnItems.filter((it) => it.id === item.id)[0]
        return (
          <div key={index} className='flex flex-col border-b border-b-gray-700'>
            <p>
              ・{data.title}　　{data.amount}円 × {item.count}
            </p>
            <p className='text-end'>{(data.amount * Number(item.count)).toLocaleString()} 円</p>
          </div>
        )
      })}
      <div className='flex justify-between'>
        <p>合計支援金額</p>
        <p>{totalAmount.toLocaleString()} 円</p>
      </div>
    </div>
  )
}
