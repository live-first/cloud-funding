'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { ItemContent } from '@/views/returns'

export type CloudFundResponseType = {
  id: string
  supporterCount: number
  count: number
}

export type Request = {
  items: ItemContent[]
  name: string
  email: string
  content: string
}

export const useCloudFundApi = () => {
  const queryClient = useQueryClient()
  const URL =
    'https://script.google.com/macros/s/AKfycbz_FywA5T97mysGudnUE63TyqW78LUFHlNXJ46_qM27o-_-fDJ_q-TLHxwjjxFYLVua/exec'

  const getCloudFund = useQuery({
    queryKey: ['auditions'],
    queryFn: async () => {
      return await axios.get('')
    },
  })

  const addFund = useMutation({
    mutationFn: (data: Request) => {
      return axios.post(
        URL,
        encodeURI(
          `name=${data.name}&email=${data.email}&content=${data.content}&product1=${data.items[0].count}&product2=${data.items[1].count}&product3=${data.items[2].count}&product4=${data.items[3].count}&product5=${data.items[4].count}`,
        ),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  return { getCloudFund, addFund }
}
