'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'
import { EventCreateResponseType, EventType } from '@/domain/event'

export const useEventApi = () => {
  const queryClient = useQueryClient()

  const getEvents = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      return (
        await axios.get(
          `https://script.google.com/macros/s/AKfycbyjbYd2Si_hd191KVfpB1lWIPtBvTUKdjoHk_ebWcfYViF3nKcJ7RXgsk2cWD5nVYH7BA/exec`,
        )
      ).data
    },
  })

  // const addEvent = useMutation({
  //   mutationFn: (data: EventType) => {
  //     return axios.post<EventCreateResponseType>(
  //       'https://script.google.com/macros/s/AKfycbyjbYd2Si_hd191KVfpB1lWIPtBvTUKdjoHk_ebWcfYViF3nKcJ7RXgsk2cWD5nVYH7BA/exec',
  //       data,
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           method: 'post',
  //         },
  //       },
  //     )
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['events'] })
  //   },
  // })

  const addEvent = async (data: EventType): Promise<EventCreateResponseType> => {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyjbYd2Si_hd191KVfpB1lWIPtBvTUKdjoHk_ebWcfYViF3nKcJ7RXgsk2cWD5nVYH7BA/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        mode: 'no-cors',
        body: JSON.stringify(data),
      },
    )
    return res.json()
  }

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
    addEvent,
    updateEvent,
  }
}
