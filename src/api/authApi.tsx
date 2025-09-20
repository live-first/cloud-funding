'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { AuthContents } from '@/domain/authentication'

export const useAuthApi = () => {
  const queryClient = useQueryClient()

  const checkAuth = useMutation({
    mutationFn: (body: AuthContents) => {
      return axios.post('/login', body)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['login'] })
    },
  })

  return {
    checkAuth,
  }
}
