import { FC, ReactNode } from 'react'

import { Card, Typography, CardContent, CardMedia } from '@mui/material'

import { BaseProps } from '@/types'

type FeatureCardProps = BaseProps & {
  title: string
  imgSrc: string
  alt: string
  children?: ReactNode
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  children,
  imgSrc,
  alt,
}) => {
  return (
    <Card sx={{ minWidth: '200px', pb: '3rem' }} elevation={0}>
      <CardMedia
        component="img"
        height="300"
        image={imgSrc}
        alt={alt}
        sx={{ padding: '1rem 1rem 0 1rem', objectFit: 'contain' }}
      />
      <CardContent sx={{ px: '2rem' }}>
        <Typography
          align="center"
          variant="h5"
          sx={{ p: '1rem 0 2rem', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

export default FeatureCard
