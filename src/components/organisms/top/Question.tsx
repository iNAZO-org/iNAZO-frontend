import { FC, ReactNode } from 'react'

import { Typography, Box, Link } from '@mui/material'

import { BaseProps } from '@/types'

type QuestionRowProps = BaseProps & {
  variant?: 'question' | 'answer'
  children?: ReactNode
}

const QuestionRow: FC<QuestionRowProps> = ({
  variant = 'question',
  children,
}) => {
  const commonStyle = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    mb: '1rem',
    '&::before': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50px',
      height: '50px',
      mr: '2rem',
      flexShrink: 0,
    },
  }
  const questionStyle = {
    ...commonStyle,
    '&::before': {
      ...commonStyle['&::before'],
      content: '"Q"',
      background: '#D65556',
      color: '#fff',
    },
  }
  const answerStyle = {
    ...commonStyle,
    '&::before': {
      ...commonStyle['&::before'],
      content: '"A"',
      background: '#2196f3',
      color: '#fff',
    },
  }
  return (
    <Box sx={variant === 'question' ? questionStyle : answerStyle}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {children}
      </Typography>
    </Box>
  )
}

type QuestionProps = BaseProps

const Question: FC<QuestionProps> = () => {
  return (
    <Box
      sx={{
        background: '#eeeeee',
        p: {
          xs: '3rem 1rem',
          sm: '5rem',
        },
        my: '5rem',
        borderRadius: '1rem',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ mb: '4rem' }}
      >
        Q&A
      </Typography>

      <Box sx={{ mb: '3rem' }}>
        <QuestionRow>誰が作っているのですか？</QuestionRow>
        <QuestionRow variant="answer">
          北大生応援メディアの
          <Link
            href="https://hu-jagajaga.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JagaJaga
          </Link>
          が開発・運用しています。
        </QuestionRow>
      </Box>

      <Box sx={{ mb: '3rem' }}>
        <QuestionRow>このサービスは大学公認ですか？</QuestionRow>
        <QuestionRow variant="answer">
          非公認です。
          <Link
            href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            データ参照先
          </Link>
          の併用をお勧めします。
        </QuestionRow>
      </Box>

      <Box sx={{ mb: '3rem' }}>
        <QuestionRow>バグを見つけました。どうすればいいですか？</QuestionRow>
        <QuestionRow variant="answer">
          見つけたバグを
          <Link
            href="https://forms.gle/tLRiKrShckWsiuXs9"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </Link>
          のGoogle Formで教えて下さると幸いです。
          機能追加等の要望もお待ちしています。
        </QuestionRow>
      </Box>
    </Box>
  )
}

export default Question
