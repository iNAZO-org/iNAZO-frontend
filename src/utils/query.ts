import { SearchURLQuery } from '@/types'

export const RemoveOptionalKeyOfSearchQuery = (query: SearchURLQuery) => {
  const result: SearchURLQuery = {}
  if (query.page) result.page = query.page
  if (query.sort) result.sort = query.sort
  if (query.search) result.search = query.search
  return result
}
