import { Grid, Alert, Typography } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import SEO from '@/components/atoms/SEO'
import GradeDistributionCard from '@/components/molecules/GradeDistributionCard'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { APISearchGradeDistribution } from '@/types/schema'
import { fetcher, useSearchGradeDistribution } from '@/utils/api'
import { API_ENDPOINTS } from '@/utils/settings'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryId = String(query.id || '')
  // TODO: fetcher内でzodを使用してバリデーションをしているが、適切な型定義に修正
  const fallbackData = (await fetcher([
    API_ENDPOINTS.search,
    {
      ids: queryId,
    },
  ])) as APISearchGradeDistribution

  return { props: { fallbackData } }
}

type DetailPageProps = {
  fallbackData: APISearchGradeDistribution
}

const DetailPage: NextPage<DetailPageProps> = ({ fallbackData }) => {
  const router = useRouter()
  const queryId = String(router.query.id || '')

  const { gradeDistributionWithPagination, error } = useSearchGradeDistribution(
    {
      query: {
        ids: queryId,
      },
      fallbackData,
    },
  )

  if (error) throw error
  if (!gradeDistributionWithPagination) return <LoadingLayout open />
  if (gradeDistributionWithPagination.rows?.length !== 1)
    throw new Error('詳細ページで複数の成績が読み込まれました')

  const gradeDistribution = gradeDistributionWithPagination.rows[0]
  const pageTitle = gradeDistribution.subject

  return (
    <>
      <SEO title={pageTitle} />
      <BasicLayout>
        <Alert severity="info">
          <Typography component="span" fontWeight="600">
            詳細ページ
          </Typography>
        </Alert>

        <Grid
          container
          sx={{ m: '2rem 0 4rem ', display: 'flex', justifyContent: 'center' }}
        >
          <Grid item xs={12} sm={8}>
            <GradeDistributionCard gradeDistribution={gradeDistribution} />
          </Grid>
        </Grid>
      </BasicLayout>
    </>
  )
}

export default DetailPage
