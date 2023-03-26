import axios from 'axios'
import useSWR from 'swr'

import { SearchGradeDistributionQuery } from '@/types'
import {
  APISearchGradeDistribution,
  apiSearchGradeDistribution,
} from '@/types/schema'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'
import { API_BASE_URL, API_ENDPOINTS, ApiEndpoints } from '@/utils/settings'

import { unreachable } from './common'

export type FetcherParams = [
  ApiEndpoints[keyof ApiEndpoints],
  { [key: string]: string | number },
]

export const fetcher = async ([endpoint, query]: FetcherParams) => {
  const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
    params: query,
  })
  const data = response.data

  // APIレスポンスの型を検証する(TODO: any型を使わない)
  switch (endpoint) {
    case API_ENDPOINTS.search:
      apiSearchGradeDistribution.parse(data)
      break
    default:
      unreachable(endpoint)
  }

  return data
}

type UseSearchGradeDistribution = {
  query: SearchGradeDistributionQuery
  fallbackData?: APISearchGradeDistribution
  isReady?: boolean
}

export const useSearchGradeDistribution = ({
  query,
  fallbackData,
  isReady = true,
}: UseSearchGradeDistribution) => {
  const endPoint = API_ENDPOINTS.search
  // 0、空白の場合はクエリから除外する
  const removedQuery = removeOptionalKeyOfSearchQuery(query)

  const { data, error, isLoading } = useSWR<APISearchGradeDistribution, Error>(
    isReady ? [endPoint, removedQuery] : null,
    fetcher,
    { fallbackData },
  )

  return {
    gradeDistributionWithPagination: data?.result,
    error: error,
    isLoading,
  }
}
