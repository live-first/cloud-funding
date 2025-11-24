'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useStore } from '@/store/useStore'
import { ItemContent } from '../returns'
import { returnItems } from '@/data/items/returnItems'
import { useRouter } from 'next/navigation'
import { PaymentElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

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

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return
    setLoading(true)
    setErrorMessage(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    })

    if (error) {
      setErrorMessage(error.message || 'エラーが発生しました')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 space-y-4'>
      <h2 className='text-xl font-bold'>お客さま情報</h2>

      <h2 className='text-xl font-bold'>配送先情報</h2>
      <AddressElement options={{ mode: 'shipping' }} />

      <h2 className='text-xl font-bold'>お支払い情報</h2>
      <PaymentElement />

      {errorMessage && <p className='text-red-600 text-sm mt-2'>{errorMessage}</p>}

      <button
        type='submit'
        disabled={!stripe || loading}
        className='w-full bg-blue-600 text-white py-2 rounded mt-4'
      >
        {loading ? '処理中…' : '支払う'}
      </button>
    </form>
  )
}
