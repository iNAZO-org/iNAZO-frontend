import { useCallback, useEffect, useState } from 'react'

import { Grid, Alert, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Pagination from '@/components/atoms/Pagination'
import GradeDistributionCard from '@/components/molecules/GradeDistributionCard'
import SearchForm from '@/components/organisms/SearchForm'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { useSearchGradeDistribution } from '@/utils/api'
import { RemoveOptionalKeyOfSearchQuery } from '@/utils/query'

const Search = () => {
  const router = useRouter()

  const pageQuery = router.query.page
  const sortValueQuery = router.query.sort
  const searchQuery = router.query.search

  const [page, setPage] = useState(0)
  const [selectSortValue, setSelectSortValue] = useState('')
  const [search, setSearch] = useState('')
  const [gradeIds, setGradeIds] = useState('')
  const [isReadyQuery, setIsReadyQuery] = useState(false) // stateの初期値による２重リクエストを防止するため

  const { gradeDistributionWithPagination, isLoading, isError } =
    useSearchGradeDistribution(
      {
        page: page,
        sort: selectSortValue,
        search: search,
        ids: gradeIds,
      },
      isReadyQuery,
    )

  useEffect(() => {
    if (router.isReady) {
      setPage(Number(pageQuery || '1'))
      setSelectSortValue(String(sortValueQuery || 'latest'))
      setSearch(String(searchQuery || ''))
      setGradeIds('1,2,3,4,5,6,7,8,9,10,11,12,13,14') // TODO: localStorageを使う
      setIsReadyQuery(true) // ２重リクエストを防止するため、クエリがstateで管理されたタイミングでリクエストを開始する。
    }
  }, [pageQuery, sortValueQuery, searchQuery])

  const handlePaginationOnChange = useCallback(
    (nextPage: number) => {
      router.push({
        pathname: '/bookmark',
        query: RemoveOptionalKeyOfSearchQuery({
          page: nextPage,
          sort: selectSortValue,
          search: search,
        }),
      })
    },
    [router, selectSortValue, search],
  )

  if (isError) throw isError
  if (isLoading || !gradeDistributionWithPagination)
    return <LoadingLayout open />

  return (
    <>
      <Head>
        <title>BookMark</title>
      </Head>
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
              query: RemoveOptionalKeyOfSearchQuery({
                page: 1,
                sort: selectSortValue,
                search: searchInput,
              }),
            })
          }}
          onSelectSortChange={(selectSort) => {
            router.push({
              pathname: '/bookmark',
              query: RemoveOptionalKeyOfSearchQuery({
                page: 1,
                sort: selectSort,
                search: search,
              }),
            })
          }}
        />

        <Grid container spacing={4} sx={{ my: '4rem' }}>
          {gradeDistributionWithPagination.rows?.map((gradeData) => {
            return (
              <Grid key={gradeData.id} item xs={6}>
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

export default Search
