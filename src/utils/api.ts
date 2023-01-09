import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import useSWR from 'swr'
import { APIResponse, GradeDistributionWithPagination } from 'types'

type SearchGradeDistributionQuery = {
  page?: number
  limit?: number
  sort?: string
  search?: string
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())
const baseURL = 'http://localhost:8000'

export const useSearchGradeDistribution = (
  query: SearchGradeDistributionQuery,
) => {
  let endPoint = baseURL + '/api/grade_distribution?'
  // 0、空白の場合もクエリから除外する
  if (query.page) {
    endPoint += `page=${query.page}&`
  }
  if (query.limit) {
    endPoint += `limit=${query.limit}&`
  }
  if (query.sort) {
    endPoint += `sort=${query.sort}&`
  }
  if (query.search) {
    endPoint += `search=${query.search}`
  }

  const { data, error, isLoading } = useSWR<
    APIResponse<GradeDistributionWithPagination>,
    Error
  >(endPoint, fetcher)

  return {
    gradeDistributionWithPagination: data?.result,
    isError: error,
    isLoading,
  }
}
