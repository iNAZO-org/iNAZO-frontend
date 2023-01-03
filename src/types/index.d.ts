import { SxProps, Theme } from '@mui/material/styles'

type BaseProps = {
  sx?: SxProps<Theme>
}

type GradeDistributionGraphData = {
  apCount: number
  aCount: number
  amCount: number
  bpCount: number
  bCount: number
  bmCount: number
  cpCount: number
  cCount: number
  dCount: number
  dmCount: number
  fCount: number
}

type GradeDistribution = {
  id: number
  subject: string
  subTitle: string
  class: string
  teacher: string
  year: number
  semester: number
  faculty: string
  studentCount: number
  gpa: number

  apCount: number
  aCount: number
  amCount: number
  bpCount: number
  bCount: number
  bmCount: number
  cpCount: number
  cCount: number
  dCount: number
  dmCount: number
  fCount: number
}
