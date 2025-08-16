'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { Domain } from '@/domain/domain'

export const useDomainApi = () => {
  const queryClient = useQueryClient()

  const getDomains = useQuery({
    queryKey: ['domain'],
    queryFn: async () => {
      return (await axios.get('/domain')).data as Domain[]
    },
  })

  const addDomain = useMutation({
    mutationFn: (domain: string) => {
      return axios.post('/domain', domain)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['domain'] })
    },
  })

  return {
    getDomains,
    addDomain,
  }
}
