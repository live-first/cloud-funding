'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { CategoryType } from '@/domain/category'

export const useCategoryApi = () => {
  const queryClient = useQueryClient()

  const getCategories = useQuery({
    queryKey: ['category'],
    queryFn: async (): Promise<CategoryType[]> => {
      return (await axios.get('/category')).data
    },
  })

  const addCategory = useMutation({
    mutationFn: (data: string) => {
      return axios.post('/category', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
  })

  const updateCategory = useMutation({
    mutationFn: (data: CategoryType) => {
      return axios.put(`/category?id=${data.id}`, data.label)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
  })

  return {
    getCategories,
    addCategory,
    updateCategory,
  }
}
