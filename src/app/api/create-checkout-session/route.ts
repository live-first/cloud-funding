import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(
  'pk_test_51L2xnnFRuEcVJcvhQSsx9Iaf9ZcpHBdbfUmIkpklEzIlOgp6TPU1NoY10A6mzd7j1ti70SCDqTLOLye7onkKOFDl00CiaFmLbt',
  {
    apiVersion: '2025-11-17.clover',
  },
)

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: 'サンプル商品',
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    })

    return NextResponse.json({
      clientSecret: session.client_secret,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
