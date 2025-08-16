import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'

export const useDomainApi = () => {
  const queryClient = useQueryClient()

  const getDomains = useQuery({
    queryKey: ['domains'],
    queryFn: async () => {
      return axios.get('/domains')
    },
  })

  const addDomain = useMutation({
    mutationFn: (domain: string) => {
      return axios.post('/domains', domain)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['domains'] })
    },
  })

  return {
    getDomains,
    addDomain,
  }
}
