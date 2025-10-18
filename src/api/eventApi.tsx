'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { EventCreateResponseType, EventType } from '@/domain/event'

export const useEventApi = () => {
  const queryClient = useQueryClient()

  const EVENT_URL =
    'https://script.google.com/macros/s/AKfycbyjbYd2Si_hd191KVfpB1lWIPtBvTUKdjoHk_ebWcfYViF3nKcJ7RXgsk2cWD5nVYH7BA/exec'

  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return (await axios.get(EVENT_URL)).data
    },
  })

  const addEvent = useMutation({
    mutationFn: (data: EventType) => {
      return axios.post<EventCreateResponseType>(EVENT_URL, data, {
        headers: { 'Content-Type': 'application/json' },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  const updateEvent = useMutation({
    mutationFn: (data: EventType) => {
      return axios.put<EventCreateResponseType>('/event', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  return {
    getEvents,
    addEvent,
    updateEvent,
  }
}
