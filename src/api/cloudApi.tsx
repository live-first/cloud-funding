'use client'

import { useQuery } from '@tanstack/react-query'
import { axios } from './baseApi'

export type CloudFundResponseType = {
  id: string
  supporterCount: number
  count: number
}

export const useCloudFundApi = () => {
  const getCloudFund = useQuery({
    queryKey: ['auditions'],
    queryFn: async () => {
      return await axios.get('')
    },
  })

  return { getCloudFund }
}
