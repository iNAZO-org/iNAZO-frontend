import { SxProps, Theme } from '@mui/material/styles'

import { GradeDistribution } from '@/types/schema'

export type BaseProps = {
  sx?: SxProps<Theme>
}

export type SearchGradeDistributionQuery = {
  page?: number
  limit?: number
  sort?: string
  search?: string
  ids?: string
}

export type GradeDistributionGraphData = Pick<
  GradeDistribution,
  | 'apCount'
  | 'aCount'
  | 'amCount'
  | 'bpCount'
  | 'bCount'
  | 'bmCount'
  | 'cpCount'
  | 'cCount'
  | 'dCount'
  | 'dmCount'
  | 'fCount'
>
