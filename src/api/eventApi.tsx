'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { EventCreateResponseType, EventType } from '@/domain/event'

export const useEventApi = (id?: number) => {
  const queryClient = useQueryClient()

  const getEvents = useQuery({
    queryKey: ['eventss'],
    queryFn: async () => {
      return (await axios.get(`/event/all`)).data
    },
  })

  const getEvent = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      return (await axios.get(`/event/${id}`)).data
    },
    enabled: !!id,
  })

  const addEvent = useMutation({
    mutationFn: (data: EventType) => {
      return axios.post<EventCreateResponseType>('/event', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  const updateEvent = useMutation({
    mutationFn: (data: EventType) => {
      return axios.put('/event', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  return {
    getEvents,
    getEvent,
    addEvent,
    updateEvent,
  }
}
