'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import {
  AuditionCreateResponseType,
  AuditionResponseType,
  AuditionStatusRequest,
  AuditionType,
} from '@/domain/audition'

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
      return axios.post<AuditionCreateResponseType>('/public/audition', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auditions'] })
    },
  })

  const updateAudition = useMutation({
    mutationFn: (audition: AuditionType) => {
      return axios.put('/public/audition', audition)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auditions'] })
    },
  })

  const updateStatus = useMutation({
    mutationFn: (data: AuditionStatusRequest) => {
      return axios.put(`/audition/${data.id}`, {
        status: data.status,
        pr: data.pr,
        premier: data.premier,
      })
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
