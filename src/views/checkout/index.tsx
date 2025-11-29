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
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { contact, email, name } from '@/components/schema'
import { init, send } from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { TextFieldForm } from '@/templates/form/TextFieldForm'
import { TextAreaForm } from '@/templates/form/TextAreaForm'
import { CloudRequest, useCloudFundApi } from '@/api/cloudApi'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export const CheckoutView = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const stored = useStore('return-items').getItem()

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
        <Link href='/'>
          <div className='text-2xl bg-primary p-4 rounded-full font-bold w-5/6'>トップに戻る</div>
        </Link>
      </div>
    )

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <div className='pb-12'>
        <SummaryPanel />
        <CheckoutForm />
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
  const { addFund } = useCloudFundApi()
  const stored = useStore('return-items').getItem()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [sending, setSending] = useState<boolean>(false)
  const [notice, setNotice] = useState<boolean>(false)

  const items = JSON.parse(stored!) as ItemContent[]

  const PersonSchema = z.object({
    name: name,
    email: email,
    content: contact,
  })

  type PersonType = z.infer<typeof PersonSchema>

  const sendNotification = async (data: CloudRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!notice) {
      setNotice(true)
      await send('service_cloudfunding', 'cloud-fund-notification', data)
    }
  }

  const sendEmail = async (data: CloudRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!sending) {
      setSending(true)
      await send('service_cloudfunding', 'cloud-fund-rara', data)
    }
  }

  const {
    watch,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PersonType>({
    mode: 'onChange',
    resolver: zodResolver(PersonSchema),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, content } = watch()
    setLoading(true)
    setErrorMessage(null)

    const request: CloudRequest = {
      name: name,
      email: email,
      content: content,
      product1: items.find((item) => item.id === '1')?.count.toString() ?? '0',
      product2: items.find((item) => item.id === '2')?.count.toString() ?? '0',
      product3: items.find((item) => item.id === '3')?.count.toString() ?? '0',
      product4: items.find((item) => item.id === '4')?.count.toString() ?? '0',
      product5: items.find((item) => item.id === '5')?.count.toString() ?? '0',
    }

    if (!stripe || !elements) return

    await sendNotification(request).then(async () => {
      try {
        await addFund.mutateAsync(request)
      } catch (e) {
        console.error(e)
      }
      setNotice(false)

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/success`,
        },
      })

      if (error) {
        setErrorMessage(error.message || 'エラーが発生しました')
        setLoading(false)
        return
      }

      await sendEmail(request)
      setSending(false)
    })
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 space-y-4'>
      <h2 className='text-xl font-bold'>お客さま情報</h2>
      <TextFieldForm
        title='名前（ニックネーム）'
        required
        placeholder='来桜'
        register={register('name')}
        error={errors.name?.message}
      />
      <TextFieldForm
        title='メールアドレス'
        required
        placeholder='mail@example.com'
        register={register('email')}
        error={errors.email?.message}
        type='email'
      />
      <TextAreaForm
        title='コメント'
        required
        register={register('content')}
        error={errors.content?.message}
      />
      <h2 className='text-xl font-bold'>配送先情報</h2>
      <AddressElement options={{ mode: 'shipping' }} />

      <h2 className='text-xl font-bold'>お支払い情報</h2>
      <PaymentElement />

      {errorMessage && <p className='text-red-600 text-sm mt-2'>{errorMessage}</p>}

      <div className='flex flex-col gap-4 pt-4'>
        <Modal
          button={loading ? '処理中…' : '支払う'}
          variant='Primary'
          type='submit'
          disabled={!stripe || loading || !isValid || isSubmitting}
          className='text-center items-center'
          overlay={false}
          hideCloseBottomBtn
        >
          <LodingModal />
        </Modal>
        <Button
          type='button'
          className='bg-gray-500 hover:bg-gray-400 text-white items-center'
          onClick={() => {
            router.back()
          }}
        >
          戻る
        </Button>
      </div>
    </form>
  )
}

const LodingModal = () => {
  return (
    <div className='flex flex-col'>
      <DotLottieReact
        src='https://lottie.host/984fe129-736c-4a1b-8f4d-ad453f2f0592/P9QyOrV7jH.lottie'
        loop
        autoplay
      />
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl'>決済処理中</p>
        <p>画面を閉じないでください</p>
      </div>
    </div>
  )
}
