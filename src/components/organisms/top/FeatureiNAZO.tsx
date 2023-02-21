import { Typography, Grid, Box } from '@mui/material'
import { FC } from 'react'

import FeatureCard from 'components/molecules/FeatureCard'
import { BaseProps } from 'types'

type FeatureiNAZOProps = BaseProps

const FeatureiNAZO: FC<FeatureiNAZOProps> = ({ sx }) => {
  return (
    <Box sx={sx}>
      <Typography align="center" variant="h3" sx={{ mb: '2rem' }}>
        <Typography
          component="span"
          variant="h2"
          sx={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: 'primary.main',
          }}
        >
          iNAZO
        </Typography>
        の特徴
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FeatureCard
            title="シェア機能"
            imgSrc="/share_top.png"
            alt="share image"
          >
            <Typography variant="body1">
              ボタン1つで気になる講義をグラフで共有
            </Typography>
          </FeatureCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FeatureCard
            title="ブックマーク登録"
            imgSrc="/share_top.png"
            alt="share image"
          >
            <Typography variant="body1">
              気になる講義を登録してあなただけの一覧を
            </Typography>
          </FeatureCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FeatureCard
            title="ソート検索"
            imgSrc="/share_top.png"
            alt="share image"
          >
            <Typography variant="body1">
              表示順を変えることで知りたい情報を探しやすく
            </Typography>
          </FeatureCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FeatureiNAZO
