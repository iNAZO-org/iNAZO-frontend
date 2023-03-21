import { SxProps, Theme } from '@mui/material/styles'

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

export type GradeDistributionWithPagination = {
  limit: number
  page: number
  totalRows: number
  totalPages: number
  rows: GradeDistribution[] | null
}

export type APIResponse<T> = {
  message: string
  status: number
  result: T
}
