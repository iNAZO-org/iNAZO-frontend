import { useCallback, useEffect, useState } from 'react'

import { Alert, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import Pagination from '@/components/atoms/Pagination'
import SEO from '@/components/atoms/SEO'
import GradeDistributionList from '@/components/organisms/GradeDistributionList'
import SearchForm from '@/components/organisms/SearchForm'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { useSearchGradeDistribution } from '@/utils/api'
import { getBookmarkListFromLocalStorage } from '@/utils/common'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'

/*
  ブックマークページはお気に入りの成績IDをフロントエンド側に保存しているのでSSRしない
*/

const BookmarkPage = () => {
  const router = useRouter()

  const pageQuery = router.query.page
  const sortValueQuery = router.query.sort
  const searchQuery = router.query.search

  const [page, setPage] = useState(0)
  const [selectSortValue, setSelectSortValue] = useState('')
  const [search, setSearch] = useState('')
  const [gradeIds, setGradeIds] = useState<number[]>([])
  const [isReadyQuery, setIsReadyQuery] = useState(false) // stateの初期値による２重リクエストを防止するため

  const { gradeDistributionWithPagination, isLoading, error } =
    useSearchGradeDistribution({
      query: {
        page: page,
        sort: selectSortValue,
        search: search,
        ids: gradeIds.join(','),
      },
      isReady: isReadyQuery,
    })

  useEffect(() => {
    if (router.isReady) {
      setPage(Number(pageQuery || '1'))
      setSelectSortValue(String(sortValueQuery || 'latest'))
      setSearch(String(searchQuery || ''))

      const bookmarkList = getBookmarkListFromLocalStorage()
      setGradeIds(bookmarkList)

      setIsReadyQuery(true) // ２重リクエストを防止するため、クエリがstateで管理されたタイミングでリクエストを開始する。
    }
  }, [pageQuery, sortValueQuery, searchQuery, router.isReady])

  const handlePaginationOnChange = useCallback(
    (nextPage: number) => {
      router.push({
        pathname: '/bookmark',
        query: removeOptionalKeyOfSearchQuery({
          page: nextPage,
          sort: selectSortValue,
          search: search,
        }),
      })
    },
    [router, selectSortValue, search],
  )

  const handleEnter = useCallback(
    (searchInput: string) => {
      router.push({
        pathname: '/bookmark',
        query: removeOptionalKeyOfSearchQuery({
          page: 1,
          sort: selectSortValue,
          search: searchInput,
        }),
      })
    },
    [router, selectSortValue],
  )

  const handleSelectSortChange = useCallback(
    (selectSort: string) => {
      router.push({
        pathname: '/bookmark',
        query: removeOptionalKeyOfSearchQuery({
          page: 1,
          sort: selectSort,
          search: search,
        }),
      })
    },
    [router, search],
  )

  if (error) throw error
  if (isLoading || !gradeDistributionWithPagination)
    return <LoadingLayout open />

  return (
    <>
      <SEO title="ブックマーク一覧" />
      <BasicLayout>
        <Pagination
          totalRows={gradeDistributionWithPagination.totalRows}
          count={gradeDistributionWithPagination.totalPages}
          page={page}
          onChange={handlePaginationOnChange}
        />

        <Alert severity="info">
          <Typography component="span" fontWeight="600">
            お気に入り
          </Typography>
        </Alert>

        <SearchForm
          selectSortValue={selectSortValue}
          onEnter={handleEnter}
          onSelectSortChange={handleSelectSortChange}
        />

        {gradeDistributionWithPagination.rows && (
          <GradeDistributionList
            gradeDistributionList={gradeDistributionWithPagination.rows}
            sx={{
              my: {
                xs: '1rem',
                sm: '4rem',
              },
            }}
          />
        )}

        <Pagination
          totalRows={gradeDistributionWithPagination.totalRows}
          count={gradeDistributionWithPagination.totalPages}
          page={page}
          onChange={handlePaginationOnChange}
        />
      </BasicLayout>
    </>
  )
}

export default BookmarkPage
