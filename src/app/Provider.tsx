'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CheckoutProvider } from '@stripe/react-stripe-js/checkout'
import { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
)

export default function Provider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  useEffect(() => {
    fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  // StripeのclientSecret取得前はレンダリングしない
  if (!clientSecret) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
      </CheckoutProvider>
    </QueryClientProvider>
  )
}
