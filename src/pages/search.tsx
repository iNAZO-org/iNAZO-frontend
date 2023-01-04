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
import { useState } from 'react'

import Pagination from 'components/atoms/Pagination'
import GradeDistributionCard from 'components/molecules/GradeDistributionCard'
import BasicLayout from 'components/templates/BasicLayout'
import { useSearchGradeDistribution } from 'utils/api'

const Search = () => {
  const [page, setPage] = useState(1)
  const [selectSortValue, setSelectSortValue] = useState('latest')
  const { gradeDistributionWithPagination, isLoading, isError } =
    useSearchGradeDistribution()

  if (isError) throw new Error('error')
  if (isLoading || !gradeDistributionWithPagination) return <p>Loading</p>

  console.log(gradeDistributionWithPagination)

  return (
    <>
      <Head>
        <title>成績検索</title>
      </Head>
      <BasicLayout>
        <Pagination
          count={10}
          page={page}
          onChange={(nextPage) => {
            setPage(nextPage)
          }}
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
              }}
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
                  setSelectSortValue(e.target.value)
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
          {gradeDistributionWithPagination.rows.map((gradeData) => {
            return (
              <Grid key={gradeData.id} item xs={6}>
                <GradeDistributionCard gradeDistribution={gradeData} />
              </Grid>
            )
          })}
        </Grid>

        <Pagination
          count={10}
          page={page}
          onChange={(nextPage) => {
            setPage(nextPage)
          }}
        />
      </BasicLayout>
    </>
  )
}

export default Search
