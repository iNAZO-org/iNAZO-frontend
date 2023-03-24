import { useCallback, useEffect, useState } from 'react'

import { Grid, Alert, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import Pagination from '@/components/atoms/Pagination'
import SEO from '@/components/atoms/SEO'
import GradeDistributionCard from '@/components/molecules/GradeDistributionCard'
import SearchForm from '@/components/organisms/SearchForm'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { useSearchGradeDistribution } from '@/utils/api'
import { getBookmarkListFromLocalStorage } from '@/utils/common'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'

const Bookmark = () => {
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
    useSearchGradeDistribution(
      {
        page: page,
        sort: selectSortValue,
        search: search,
        ids: gradeIds.join(','),
      },
      isReadyQuery,
    )

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
          onEnter={(searchInput) => {
            router.push({
              pathname: '/bookmark',
              query: removeOptionalKeyOfSearchQuery({
                page: 1,
                sort: selectSortValue,
                search: searchInput,
              }),
            })
          }}
          onSelectSortChange={(selectSort) => {
            router.push({
              pathname: '/bookmark',
              query: removeOptionalKeyOfSearchQuery({
                page: 1,
                sort: selectSort,
                search: search,
              }),
            })
          }}
        />

        <Grid
          container
          spacing={4}
          sx={{
            my: {
              xs: '1rem',
              sm: '4rem',
            },
          }}
        >
          {gradeDistributionWithPagination.rows?.map((gradeData) => {
            return (
              <Grid key={gradeData.id} item xs={12} md={6}>
                <GradeDistributionCard gradeDistribution={gradeData} />
              </Grid>
            )
          })}
        </Grid>

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

export default Bookmark
