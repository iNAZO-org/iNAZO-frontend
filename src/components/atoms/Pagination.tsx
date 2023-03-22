import { FC } from 'react'

import {
  Pagination as MUIPaginaton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { BaseProps } from '@/types'

type PaginationProps = BaseProps & {
  page: number
  count: number
  totalRows: number
  onChange: (nextPage: number) => void
}

const Pagination: FC<PaginationProps> = ({
  page,
  count,
  totalRows,
  onChange,
}) => {
  const theme = useTheme()
  const isSmDown = useMediaQuery(() => theme.breakpoints.down('sm'))
  return (
    <Stack alignItems="center" sx={{ my: '2rem' }}>
      <Typography sx={{ mb: '1rem' }}>{totalRows}件</Typography>
      <MUIPaginaton
        count={count}
        page={page}
        color="primary"
        size={isSmDown ? 'small' : 'large'}
        siblingCount={isSmDown ? 1 : 2}
        showFirstButton={!isSmDown}
        showLastButton={!isSmDown}
        onChange={(_, currentPage) => {
          onChange(currentPage)
        }}
      />
    </Stack>
  )
}

export default Pagination
