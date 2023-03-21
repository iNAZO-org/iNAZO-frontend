import useSWR from 'swr'
import axios from 'axios'

import {
  APIResponse,
  GradeDistributionWithPagination,
  SearchGradeDistributionQuery,
} from '@/types'
import { BASE_URL } from '@/utils/settings'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'

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
  const endPoint = `${BASE_URL}/api/grade_distribution`
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
