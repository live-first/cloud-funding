'use client'

import { useState } from 'react'
import { PaymentElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js'

export const CheckoutForm = () => {
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
