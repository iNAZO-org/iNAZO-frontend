import { Grid, Alert, Typography } from '@mui/material'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

import Pagination from 'components/atoms/Pagination'
import GradeDistributionCard from 'components/molecules/GradeDistributionCard'
import BasicLayout from 'components/templates/BasicLayout'
import { useSearchGradeDistribution } from 'utils/api'
import { useRouter } from 'next/router'
import SearchForm from 'components/organisms/SearchForm'
import Loading from 'components/atoms/Loading'
import LoadingLayout from 'components/templates/LoadingLayout'

const Search = () => {
  const router = useRouter()

  const pageQuery = router.query.page
  const sortValueQuery = router.query.sort
  const searchQuery = router.query.search

  const [page, setPage] = useState(0)
  const [selectSortValue, setSelectSortValue] = useState('')
  const [search, setSearch] = useState('')

  const { gradeDistributionWithPagination, isLoading, isError } =
    useSearchGradeDistribution({
      page: page,
      sort: selectSortValue,
      search: search,
    })

  useEffect(() => {
    if (router.isReady) {
      setPage(Number(pageQuery || '1'))
      setSelectSortValue(String(sortValueQuery || 'latest'))
      setSearch(String(searchQuery || ''))
    }
  }, [pageQuery, sortValueQuery, searchQuery])

  const handlePaginationOnChange = useCallback(
    (nextPage: number) => {
      router.push({
        pathname: '/search',
        query: {
          page: nextPage,
          sort: selectSortValue,
          search: search,
        },
      })
    },
    [router, selectSortValue, search],
  )

  if (isError) throw new Error('error')
  if (isLoading || !gradeDistributionWithPagination)
    return <LoadingLayout open />

  return (
    <>
      <Head>
        <title>成績検索</title>
      </Head>
      <BasicLayout>
        <Pagination
          count={gradeDistributionWithPagination.totalPages}
          page={page}
          onChange={handlePaginationOnChange}
        />

        {search && (
          <Alert severity="info">
            <Typography component="span" fontWeight="600">
              検索結果：
            </Typography>
            <Typography component="span">{search}</Typography>
          </Alert>
        )}

        <SearchForm
          selectSortValue={selectSortValue}
          onEnter={(searchInput) => {
            router.push({
              pathname: '/search',
              query: {
                page: 1,
                sort: selectSortValue,
                search: searchInput,
              },
            })
          }}
          onSelectSortChange={(selectSort) => {
            router.push({
              pathname: '/search',
              query: {
                page: 1,
                sort: selectSort,
                search: search,
              },
            })
          }}
        />

        <Grid container spacing={4}>
          {gradeDistributionWithPagination.rows?.map((gradeData) => {
            return (
              <Grid key={gradeData.id} item xs={6}>
                <GradeDistributionCard gradeDistribution={gradeData} />
              </Grid>
            )
          })}
        </Grid>

        <Pagination
          count={gradeDistributionWithPagination.totalPages}
          page={page}
          onChange={handlePaginationOnChange}
        />
      </BasicLayout>
    </>
  )
}

export default Search
