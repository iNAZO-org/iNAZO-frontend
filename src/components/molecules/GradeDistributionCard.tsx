import { Card, CardContent, Typography } from '@mui/material'
import { FC } from 'react'

import GradeDistributionGraph from 'components/atoms/GradeDistributionGraph'
import { BaseProps, GradeDistribution, GradeDistributionGraphData } from 'types'

type GradeDistributionCardProps = BaseProps & {
  gradeDistribution: GradeDistribution
}

const GradeDistributionCard: FC<GradeDistributionCardProps> = ({
  gradeDistribution,
}) => {
  const gradeDistributionGraphData: GradeDistributionGraphData = {
    apCount: gradeDistribution.apCount,
    aCount: gradeDistribution.aCount,
    amCount: gradeDistribution.amCount,
    bpCount: gradeDistribution.bpCount,
    bCount: gradeDistribution.bCount,
    bmCount: gradeDistribution.bmCount,
    cpCount: gradeDistribution.cpCount,
    cCount: gradeDistribution.cCount,
    dCount: gradeDistribution.dCount,
    dmCount: gradeDistribution.dmCount,
    fCount: gradeDistribution.fCount,
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: '0.5rem' }}>
          {gradeDistribution.subject} {gradeDistribution.subTitle}
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          {gradeDistribution.year}年度 {gradeDistribution.semester}学期
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          開講学部： {gradeDistribution.faculty}
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          クラス： {gradeDistribution.class}
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          担当教員： {gradeDistribution.teacher}
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          履修者数： {gradeDistribution.studentCount}人
        </Typography>
        <Typography sx={{ mb: '0.5rem' }}>
          GPA： {gradeDistribution.gpa}
        </Typography>
        <GradeDistributionGraph data={gradeDistributionGraphData} />
      </CardContent>
    </Card>
  )
}

export default GradeDistributionCard
