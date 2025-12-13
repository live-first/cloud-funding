import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
})

export async function POST(req: Request) {
  try {
    const { amount, email, name } = await req.json()

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: '金額が不正です' }, { status: 400 })
    }

    const customer = await stripe.customers.create({
      email: email,
      name: name,
    })

    console.log(`email: ${email}, name: ${name}`)

    const customerId = customer.id

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'jpy',
      payment_method_types: ['card', 'customer_balance'],
      payment_method_options: {
        customer_balance: {
          funding_type: 'bank_transfer',
          bank_transfer: {
            type: 'jp_bank_transfer',
          },
        },
      },
      customer: customerId,
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
