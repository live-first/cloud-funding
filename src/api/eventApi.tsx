'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { EventCreateResponseType, EventType } from '@/domain/event'

export const useEventApi = () => {
  const queryClient = useQueryClient()

  const EVENT_URL =
    'https://script.google.com/macros/s/AKfycbxuZyZPNadZuOib6H57j1j4zj0kLVgAy-jXNPteQTtN62Xj4stJZYG4P6CrKhNXX8Vqow/exec'

  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return (await axios.get(EVENT_URL)).data
    },
  })

  const addEvent = useMutation({
    mutationFn: (data: EventType) => {
      return axios.post<EventCreateResponseType>(
        EVENT_URL,
        encodeURI(
          `title=${data.title}&date=${data.date}&placeName=${data.placeName}&openTime=${data.openTime}&startTime=${data.startTime}&img=${data.img}&context=${data.context}`,
        ),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
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
