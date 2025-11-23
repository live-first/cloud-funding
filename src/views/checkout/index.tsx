'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from '@/templates/form/CheckoutForm'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const stripePromise = loadStripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
)

export const CheckoutView = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    // ページロードで PaymentIntent 作成
    fetch('/api/create-payment-intent', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

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
      <CheckoutForm />
    </Elements>
  )
}
