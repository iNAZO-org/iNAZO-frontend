import axios from 'axios'
import useSWR from 'swr'

import { SearchGradeDistributionQuery } from '@/types'
import {
  APISearchGradeDistribution,
  apiSearchGradeDistribution,
} from '@/types/schema'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'
import { API_BASE_URL } from '@/utils/settings'

import { unreachable } from './common'

const endpoints = {
  search: '/api/grade_distribution',
} as const

type Endpoints = typeof endpoints
type FetcherParams = [
  Endpoints[keyof Endpoints],
  { [key: string]: string | number },
]

const fetcher = async ([endpoint, query]: FetcherParams) => {
  const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
    params: query,
  })
  const data = response.data

  // APIレスポンスの型を検証する(TODO: any型を使わない)
  switch (endpoint) {
    case endpoints.search:
      apiSearchGradeDistribution.parse(data)
      break
    default:
      unreachable(endpoint)
  }

  return data
}

export const useSearchGradeDistribution = (
  query: SearchGradeDistributionQuery,
  isReady: boolean,
) => {
  const endPoint = endpoints.search
  // 0、空白の場合はクエリから除外する
  const removedQuery = removeOptionalKeyOfSearchQuery(query)

  const { data, error, isLoading } = useSWR<APISearchGradeDistribution, Error>(
    isReady ? [endPoint, removedQuery] : null,
    fetcher,
  )

  return {
    gradeDistributionWithPagination: data?.result,
    error: error,
    isLoading,
  }
}
