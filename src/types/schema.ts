import * as z from 'zod'

export const gradeDistributionSchema = z.object({
  id: z.number(),

  subject: z.string(),
  subTitle: z.string(),
  class: z.string(),
  teacher: z.string(),
  year: z.number(),
  semester: z.number(),
  faculty: z.string(),
  studentCount: z.number(),
  gpa: z.number(),

  apCount: z.number(),
  aCount: z.number(),
  amCount: z.number(),
  bpCount: z.number(),
  bCount: z.number(),
  bmCount: z.number(),
  cpCount: z.number(),
  cCount: z.number(),
  dCount: z.number(),
  dmCount: z.number(),
  fCount: z.number(),
})

export const gradeDistributionWithPaginationSchema = z.object({
  limit: z.number(),
  page: z.number(),
  totalRows: z.number(),
  totalPages: z.number(),
  rows: z.array(gradeDistributionSchema).nullable(),
})

export const apiSearchGradeDistribution = z.object({
  message: z.string(),
  status: z.number(),
  result: gradeDistributionWithPaginationSchema,
})

export type GradeDistribution = z.infer<typeof gradeDistributionSchema>
export type GradeDistributionWithPaginationSchema = z.infer<
  typeof gradeDistributionWithPaginationSchema
>
export type APISearchGradeDistribution = z.infer<
  typeof apiSearchGradeDistribution
>
