'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/templates/form/CheckoutForm'

const stripePromise = loadStripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
)

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    // ページロードで PaymentIntent 作成
    fetch('/api/create-payment-intent', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  if (!clientSecret) return <div>読み込み中...</div>

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  )
}
