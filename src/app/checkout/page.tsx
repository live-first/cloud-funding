'use client'

import { useState } from 'react'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    })
    const data = await res.json()

    if (data.url) {
      window.location.href = data.url // Stripe Checkoutへ遷移
    }
    setLoading(false)
  }

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>チケット購入</h1>
      <p className='mb-4'>価格：1,000円</p>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className='px-4 py-2 bg-blue-600 text-white rounded'
      >
        {loading ? '読み込み中…' : '購入する'}
      </button>
    </div>
  )
}
