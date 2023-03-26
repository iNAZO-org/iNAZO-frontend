import { useCallback } from 'react'

import { Alert, Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import Pagination from '@/components/atoms/Pagination'
import SEO from '@/components/atoms/SEO'
import GradeDistributionList from '@/components/organisms/GradeDistributionList'
import SearchForm from '@/components/organisms/SearchForm'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { APISearchGradeDistribution } from '@/types/schema'
import { fetcher, useSearchGradeDistribution } from '@/utils/api'
import { removeOptionalKeyOfSearchQuery } from '@/utils/query'
import { API_ENDPOINTS } from '@/utils/settings'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pageQuery = Number(query.page || '1')
  const sortValueQuery = String(query.sort || 'latest')
  const searchQuery = String(query.search || '')
  const requiredQuery = removeOptionalKeyOfSearchQuery({
    page: pageQuery,
    sort: sortValueQuery,
    search: searchQuery,
  })
  // TODO: fetcher内でzodを使用してバリデーションをしているが、適切な型定義に修正
  const fallbackData = (await fetcher([
    API_ENDPOINTS.search,
    requiredQuery,
  ])) as APISearchGradeDistribution

  return { props: { fallbackData } }
}

type SearchPageProps = {
  fallbackData: APISearchGradeDistribution
}

const SearchPage: NextPage<SearchPageProps> = ({ fallbackData }) => {
  const router = useRouter()

  const pageQuery = Number(router.query.page || '1')
  const sortValueQuery = String(router.query.sort || 'latest')
  const searchQuery = String(router.query.search || '')

  const pageTitle = `${searchQuery && searchQuery + ' - '}成績検索`

  const { gradeDistributionWithPagination, error } = useSearchGradeDistribution(
    {
      query: {
        page: pageQuery,
        sort: sortValueQuery,
        search: searchQuery,
      },
      fallbackData,
    },
  )

  const handlePaginationOnChange = useCallback(
    (nextPage: number) => {
      router.push({
        pathname: '/search',
        query: removeOptionalKeyOfSearchQuery({
          page: nextPage,
          sort: sortValueQuery,
          search: searchQuery,
        }),
      })
    },
    [router, sortValueQuery, searchQuery],
  )

  const handleEnter = useCallback(
    (searchInput: string) => {
      router.push({
        pathname: '/search',
        query: removeOptionalKeyOfSearchQuery({
          page: 1,
          sort: sortValueQuery,
          search: searchInput,
        }),
      })
    },
    [router, sortValueQuery],
  )

  const handleSelectSortChange = useCallback(
    (selectSort: string) => {
      router.push({
        pathname: '/search',
        query: removeOptionalKeyOfSearchQuery({
          page: 1,
          sort: selectSort,
          search: searchQuery,
        }),
      })
    },
    [router, searchQuery],
  )

  if (error) throw error
  if (!gradeDistributionWithPagination) return <LoadingLayout open />

  return (
    <>
      <SEO title={pageTitle} />
      <BasicLayout>
        <Pagination
          totalRows={gradeDistributionWithPagination.totalRows}
          count={gradeDistributionWithPagination.totalPages}
          page={pageQuery}
          onChange={handlePaginationOnChange}
        />

        {searchQuery && (
          <Alert severity="info">
            <Typography component="span" fontWeight="600">
              検索結果：
            </Typography>
            <Typography component="span">{searchQuery}</Typography>
          </Alert>
        )}

        <SearchForm
          selectSortValue={sortValueQuery}
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
          page={pageQuery}
          onChange={handlePaginationOnChange}
        />
      </BasicLayout>
    </>
  )
}

export default SearchPage
