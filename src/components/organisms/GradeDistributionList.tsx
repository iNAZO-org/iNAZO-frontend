import { FC } from 'react'

import { Grid } from '@mui/material'

import { BaseProps } from '@/types'
import { GradeDistribution } from '@/types/schema'

import GradeDistributionCard from '../molecules/GradeDistributionCard'

type GradeDistributionListProps = BaseProps & {
  gradeDistributionList: GradeDistribution[]
}

const GradeDistributionList: FC<GradeDistributionListProps> = ({
  gradeDistributionList,
  sx,
}) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        ...sx,
      }}
    >
      {gradeDistributionList?.map((gradeData) => {
        return (
          <Grid key={gradeData.id} item xs={12} md={6}>
            <GradeDistributionCard gradeDistribution={gradeData} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default GradeDistributionList
