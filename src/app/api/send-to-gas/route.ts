import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const GAS_URL =
      'https://script.google.com/macros/s/AKfycbyjbYd2Si_hd191KVfpB1lWIPtBvTUKdjoHk_ebWcfYViF3nKcJ7RXgsk2cWD5nVYH7BA/exec'

    const response = await axios.post(GAS_URL, data, {
      headers: { 'Content-Type': 'application/json' },
    })

    return NextResponse.json(response.data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error posting to GAS:', error.message)
    return NextResponse.json({ status: 'error', message: error.message }, { status: 500 })
  }
}
