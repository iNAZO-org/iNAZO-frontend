import SearchIcon from '@mui/icons-material/Search'
import {
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

import Pagination from 'components/atoms/Pagination'
import GradeDistributionCard from 'components/molecules/GradeDistributionCard'
import BasicLayout from 'components/templates/BasicLayout'
import { useSearchGradeDistribution } from 'utils/api'
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()

  const pageQuery = Number(router.query.page || '1')
  const sortValueQuery = String(router.query.sort || 'latest')
  const searchQuery = String(router.query.search || '')

  const [composing, setComposition] = useState(false)

  const [page, setPage] = useState(pageQuery)
  const [selectSortValue, setSelectSortValue] = useState(sortValueQuery)
  const [search, setSearch] = useState(searchQuery)
  const [searchInput, setSearchInput] = useState('')

  const { gradeDistributionWithPagination, isLoading, isError } =
    useSearchGradeDistribution({
      page: page,
      sort: sortValueQuery,
      search: search,
    })

  useEffect(() => {
    setPage(pageQuery)
    setSelectSortValue(sortValueQuery)
    setSearch(searchQuery)
  }, [pageQuery, sortValueQuery, search])

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
  if (isLoading || !gradeDistributionWithPagination) return <p>Loading</p>

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

        <Grid container sx={{ my: '5rem' }}>
          <Grid item xs={4}>
            <TextField
              label="講義を検索する"
              helperText="講義名・教員名・年度・学部・クラスなどで検索ができます"
              type="search"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                onCompositionStart: () => setComposition(true),
                onCompositionEnd: () => setComposition(false),
              }}
              onKeyDown={(e) => {
                if (composing) return
                if (e.key === 'Enter') {
                  setSearch(searchInput)
                  router.push({
                    pathname: '/search',
                    query: {
                      page: 1,
                      sort: selectSortValue,
                      search: searchInput,
                    },
                  })
                }
              }}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Grid>

          <Grid item xs={5} />

          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="search-label">Sort</InputLabel>
              <Select
                labelId="search-label"
                label="Sort"
                value={selectSortValue}
                onChange={(e) => {
                  router.push({
                    pathname: '/search',
                    query: {
                      page: 1,
                      sort: e.target.value,
                      search: search,
                    },
                  })
                }}
              >
                <MenuItem value="latest">新着順</MenuItem>
                <MenuItem value="-gpa">GPA (降順)</MenuItem>
                <MenuItem value="gpa">GPA (昇順)</MenuItem>
                <MenuItem value="failure">単位取得者数</MenuItem>
                <MenuItem value="-failure">落単者数</MenuItem>
                <MenuItem value="-a_band">A帯 (降順)</MenuItem>
                <MenuItem value="a_band">A帯 (昇順)</MenuItem>
                <MenuItem value="-f">F (降順)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

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
