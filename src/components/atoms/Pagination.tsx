import { FC } from 'react'

import { Pagination as MUIPaginaton, Stack, Typography } from '@mui/material'

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
  return (
    <Stack alignItems="center" sx={{ my: '2rem' }}>
      <Typography sx={{ mb: '1rem' }}>{totalRows}件</Typography>
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
