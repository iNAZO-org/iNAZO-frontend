import axios from 'axios'
import useSWR from 'swr'

import {
  APIResponse,
  GradeDistributionWithPagination,
  SearchGradeDistributionQuery,
} from '@/types'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'
import { API_BASE_URL } from '@/utils/settings'

type FetcherParams = [string, { [key: string]: string | number }]

const fetcher = ([endpoint, query]: FetcherParams) => {
  return axios
    .get(endpoint, {
      params: query,
    })
    .then((r) => r.data)
}

export const useSearchGradeDistribution = (
  query: SearchGradeDistributionQuery,
  isReady: boolean,
) => {
  const endPoint = `${API_BASE_URL}/api/grade_distribution`
  // 0、空白の場合はクエリから除外する
  const removedQuery = removeOptionalKeyOfSearchQuery(query)

  const { data, error, isLoading } = useSWR<
    APIResponse<GradeDistributionWithPagination>,
    Error
  >(isReady ? [endPoint, removedQuery] : null, fetcher)

  return {
    gradeDistributionWithPagination: data?.result,
    isError: error,
    isLoading,
  }
}
