'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { UserResponseType, UserType } from '@/domain/user'

export const useUserApi = (id?: number) => {
  const queryClient = useQueryClient()

  const getUsers = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      return (await axios.get(`/users`)).data as UserResponseType[]
    },
  })

  const getUser = useQuery({
    queryKey: ['users', id],
    queryFn: async () => {
      return (await axios.get(`/users/${id}`)).data as UserResponseType
    },
    enabled: !!id,
  })

  const addUser = useMutation({
    mutationFn: (data: UserType) => {
      return axios.post('/users', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const updateUser = useMutation({
    mutationFn: (data: UserType) => {
      return axios.put('/users', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return {
    getUsers,
    getUser,
    addUser,
    updateUser,
  }
}
