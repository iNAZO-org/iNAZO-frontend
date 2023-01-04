import { SxProps, Theme } from '@mui/material/styles'

export type BaseProps = {
  sx?: SxProps<Theme>
}

export type GradeDistributionGraphData = {
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

export type GradeDistribution = {
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

export type GradeDistributionWithPagination = {
  limit: number
  page: number
  sort: string
  totalRows: number
  totalPages: number
  rows: GradeDistribution[]
}

export type APIResponse<T> = {
  message: string
  status: number
  result: T
}
