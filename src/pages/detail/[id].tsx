import { useEffect, useState } from 'react'

import { Grid, Alert, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import SEO from '@/components/atoms/SEO'
import GradeDistributionCard from '@/components/molecules/GradeDistributionCard'
import BasicLayout from '@/components/templates/BasicLayout'
import LoadingLayout from '@/components/templates/LoadingLayout'
import { useSearchGradeDistribution } from '@/utils/api'

const DetailPage = () => {
  const router = useRouter()

  const [gradeId, setGradeId] = useState('')
  const [isReadyQuery, setIsReadyQuery] = useState(false)

  const { gradeDistributionWithPagination, isLoading, error } =
    useSearchGradeDistribution(
      {
        ids: gradeId,
      },
      isReadyQuery,
    )

  useEffect(() => {
    if (router.isReady) {
      setGradeId(String(router.query.id || ''))
      setIsReadyQuery(true) // ２重リクエストを防止するため、クエリがstateで管理されたタイミングでリクエストを開始する。
    }
  }, [router.isReady, router.query.id])

  if (error) throw error
  if (isLoading || !gradeDistributionWithPagination)
    return <LoadingLayout open />
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
