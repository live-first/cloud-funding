'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { AuditionCreateResponseType, AuditionResponseType, AuditionType } from '@/domain/audition'
import { StatusRequest } from '@/domain/enum/Status'

export const useAuditionApi = (id?: number) => {
  const queryClient = useQueryClient()

  const getAuditions = useQuery({
    queryKey: ['auditions'],
    queryFn: async () => {
      return (await axios.get(`/audition/all`)).data as AuditionResponseType[]
    },
  })

  const getAudition = useQuery({
    queryKey: ['audition', id],
    queryFn: async () => {
      return (await axios.get(`/audition/${id}`)).data as AuditionResponseType
    },
    enabled: !!id,
  })

  const addAudition = useMutation({
    mutationFn: (data: AuditionType) => {
      return axios.post<AuditionCreateResponseType>('/audition', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auditions'] })
    },
  })

  const updateAudition = useMutation({
    mutationFn: (audition: AuditionType) => {
      return axios.put('/audition', audition)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auditions'] })
    },
  })

  const updateStatus = useMutation({
    mutationFn: (data: StatusRequest) => {
      return axios.put(`/audition/${data.id}`, { status: data.status })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auditions'] })
    },
  })

  return {
    getAuditions,
    getAudition,
    addAudition,
    updateAudition,
    updateStatus,
  }
}
