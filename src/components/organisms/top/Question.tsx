import { Typography, Grid, Box, Link } from '@mui/material'
import { FC, ReactNode } from 'react'

import { BaseProps } from 'types'

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
    <Typography
      variant="subtitle1"
      sx={variant === 'question' ? questionStyle : answerStyle}
    >
      {children}
    </Typography>
  )
}

type QuestionProps = BaseProps

const Question: FC<QuestionProps> = () => {
  return (
    <Box
      sx={{
        background: '#eeeeee',
        p: '5rem',
        my: '5rem',
        borderRadius: '1rem',
      }}
    >
      <Typography variant="h3" align="center" sx={{ mb: '4rem' }}>
        Q&A
      </Typography>

      <Box sx={{ mb: '3rem' }}>
        <QuestionRow>誰が作っているのですか？</QuestionRow>
        <QuestionRow variant="answer">
          A. 北大生応援メディアの
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
        <QuestionRow>Q. このサービスは大学公認ですか？</QuestionRow>
        <QuestionRow variant="answer">
          A. 非公認です。
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
        <QuestionRow>Q. バグを見つけました。どうすればいいですか？</QuestionRow>
        <QuestionRow variant="answer">
          A. 見つけたバグを
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
