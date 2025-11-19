'use client'

import { CheckoutForm } from '@/templates/form/CheckoutForm'
import { CheckoutProvider } from '@stripe/react-stripe-js/checkout'
import { loadStripe } from '@stripe/stripe-js'
import { useMemo } from 'react'

const stripePromise = loadStripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
)

export const HomeView = () => {
  const promise = useMemo(() => {
    return fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret)
  }, [])

  return (
    <CheckoutProvider stripe={stripePromise} options={{ clientSecret: promise }}>
      <CheckoutForm />
    </CheckoutProvider>
  )
}
