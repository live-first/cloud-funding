'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { NewsType } from '@/domain/news'

export const useNewsApi = (domain: string) => {
  const queryClient = useQueryClient()

  const getNews = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      return (await axios.get(`/news?domain=${domain}`)).data as NewsType[]
    },
  })

  const addNews = useMutation({
    mutationFn: (news: string) => {
      return axios.post('/news', news)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] })
    },
  })

  const updateNews = useMutation({
    mutationFn: (news: string) => {
      return axios.put('/news', news)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] })
    },
  })

  return {
    getNews,
    addNews,
    updateNews,
  }
}
