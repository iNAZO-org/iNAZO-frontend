import { Twitter } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { BaseProps } from '@/types'
import { BASE_URL } from '@/utils/settings'

type TwitterShareButtonProps = {
  gradeDistributionId: number
} & BaseProps

const TwitterShareButton = ({
  gradeDistributionId,
  sx,
}: TwitterShareButtonProps) => {
  const content = '成績分布検索サービス - iNAZO'
  const hashtags = '%23iNAZO'
  const detailURL = `${BASE_URL}/detail/${gradeDistributionId}`
  const textQuery = `${content}%0a${hashtags}%0a${detailURL}`
  const shareURL = `https://twitter.com/intent/tweet?text=${textQuery}`

  return (
    <IconButton
      href={shareURL}
      target="_blank"
      sx={{
        background: '#1DA1F2',
        '&:hover': {
          background: '#1DA1F2', // MUIの設定を上書きする
          opacity: '0.7',
        },
        ...sx,
      }}
    >
      <Twitter
        sx={{
          color: 'white',
        }}
      />
    </IconButton>
  )
}

export default TwitterShareButton
