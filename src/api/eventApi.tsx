'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { EventCreateResponseType, EventType } from '@/domain/event'

export const useEventApi = (id?: number) => {
  const queryClient = useQueryClient()

  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return (await axios.get(`/event`)).data
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
      return axios.post<EventCreateResponseType>(
        'https://script.google.com/macros/s/AKfycbzpzAPxTtKceJ9uoqgWLUjQuH6YMuUPN0Aa3PPcENcxF-uxg0ZcmaL0wA-kEKecOXWWGg/exec',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            method: 'post',
          },
        },
      )
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
