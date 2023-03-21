import { SearchGradeDistributionQuery } from '@/types'

// NOTE: 引数と戻り値が同一オブジェクト
export const removeOptionalKeyOfSearchQuery = (
  query: SearchGradeDistributionQuery,
) => {
  for (const prop in query) {
    if (Object.prototype.hasOwnProperty.call(query, prop)) {
      const typedProp = prop as keyof SearchGradeDistributionQuery
      if (!query[typedProp]) {
        delete query[typedProp]
      }
    }
  }
  return query
}
