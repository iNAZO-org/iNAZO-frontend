import { Grid } from '@mui/material'
import Head from 'next/head'
import * as React from 'react'

import GradeDistributionGraph from 'components/atoms/GradeDistributionGraph'
import BasicLayout from 'components/templates/BasicLayout'
import { GradeDistributionGraphData } from 'types'

const Search = () => {
  const gradeData: GradeDistributionGraphData = {
    apCount: 1,
    aCount: 2,
    amCount: 3,
    bpCount: 4,
    bCount: 5,
    bmCount: 6,
    cpCount: 7,
    cCount: 8,
    dCount: 9,
    dmCount: 10,
    fCount: 11,
  }
  return (
    <>
      <Head>
        <title>成績検索</title>
      </Head>
      <BasicLayout>
        <Grid container>
          <Grid item xs={6}>
            <GradeDistributionGraph data={gradeData} />
          </Grid>
          <Grid item xs={6}>
            <GradeDistributionGraph data={gradeData} />
          </Grid>
          <Grid item xs={6}>
            <GradeDistributionGraph data={gradeData} />
          </Grid>
          <Grid item xs={6}>
            <GradeDistributionGraph data={gradeData} />
          </Grid>
        </Grid>
      </BasicLayout>
    </>
  )
}

export default Search
