'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'

export type CloudFundResponseType = {
  id: string
  supporterCount: number
  count: number
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
    mutationFn: (data: EventType) => {
      return axios.post(
        URL,
        encodeURI(
          `title=${data.title}&date=${data.date}&placeName=${data.placeName}&openTime=${data.openTime}&startTime=${data.startTime}&img=${data.img}&context=${data.context}`,
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
