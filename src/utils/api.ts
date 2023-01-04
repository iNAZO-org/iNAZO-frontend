import useSWR from 'swr'
import { APIResponse, GradeDistributionWithPagination } from 'types'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const useSearchGradeDistribution = () => {
  const { data, error, isLoading } = useSWR<
    APIResponse<GradeDistributionWithPagination>,
    Error
  >('http://localhost:8000/api/grade_distribution', fetcher)

  return {
    gradeDistributionWithPagination: data?.result,
    isError: error,
    isLoading,
  }
}
