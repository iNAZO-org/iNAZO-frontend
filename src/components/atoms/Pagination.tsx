import {
  Grid,
  Pagination as MUIPaginaton,
  Stack,
  Typography,
} from '@mui/material'
import { FC } from 'react'
import { BaseProps } from 'types'

type PaginationProps = BaseProps & {
  page: number
  count: number
  onChange: (nextPage: number) => void
}

const Pagination: FC<PaginationProps> = ({ page, count, onChange }) => {
  return (
    <Stack alignItems="center" sx={{ my: '2rem' }}>
      <Typography sx={{ mb: '1rem' }}>{count}件</Typography>
      <MUIPaginaton
        count={count}
        page={page}
        color="primary"
        size="large"
        siblingCount={2}
        showFirstButton
        showLastButton
        onChange={(_, currentPage) => {
          onChange(currentPage)
        }}
      />
    </Stack>
  )
}

export default Pagination
