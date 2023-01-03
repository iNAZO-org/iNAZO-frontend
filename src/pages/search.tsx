import { Grid } from '@mui/material'
import Head from 'next/head'
import * as React from 'react'

import GradeDistributionGraph from 'components/atoms/GradeDistributionGraph'
import GradeDistributionCard from 'components/molecules/GradeDistributionCard'
import BasicLayout from 'components/templates/BasicLayout'
import { GradeDistribution } from 'types'

const Search = () => {
  const gradeData: GradeDistribution = {
    id: 1,
    subject: 'test',
    subTitle: 'string',
    class: 'string',
    teacher: 'string',
    year: 2022,
    semester: 1,
    faculty: 'string',
    studentCount: 20,
    gpa: 3,

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
  const gradeDataList = new Array(10)
    .fill(0)
    .map((_, i) => ({ ...gradeData, id: i }))
  return (
    <>
      <Head>
        <title>成績検索</title>
      </Head>
      <BasicLayout>
        <Grid container spacing={4}>
          {gradeDataList.map((gradeData) => {
            return (
              <Grid key={gradeData.id} item xs={6}>
                <GradeDistributionCard gradeDistribution={gradeData} />
              </Grid>
            )
          })}
        </Grid>
      </BasicLayout>
    </>
  )
}

export default Search
