'use client'

import { CloudRequest } from '@/api/cloudApi'
import { useState } from 'react'
import { init, send } from '@emailjs/browser'
import { useStore } from '@/store/useStore'
import { ItemContent } from '@/views/returns'

export const useCheckoutPresenter = () => {
  const [notice, setNotice] = useState<boolean>(false)
  const [sending, setSending] = useState<boolean>(false)

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

  const stored = useStore('return-items').getItem()
  const items = JSON.parse(stored!) as ItemContent[]
  const request = ({
    name,
    email,
    content,
  }: {
    name: string
    email: string
    content: string
  }): CloudRequest => {
    return {
      name: name,
      email: email,
      content: content,
      product1: items.find((item) => item.id === '1')?.count.toString() ?? '0',
      product2: items.find((item) => item.id === '2')?.count.toString() ?? '0',
      product3: items.find((item) => item.id === '3')?.count.toString() ?? '0',
      product4: items.find((item) => item.id === '4')?.count.toString() ?? '0',
      product5: items.find((item) => item.id === '5')?.count.toString() ?? '0',
    }
  }

  return { sendNotification, setNotice, sendEmail, setSending, request }
}
