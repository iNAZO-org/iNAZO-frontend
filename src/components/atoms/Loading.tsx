import { FC } from 'react'

import { Backdrop, CircularProgress } from '@mui/material'

import { BaseProps } from '@/types'

type LoadingProps = BaseProps & {
  open: boolean
}

const Loading: FC<LoadingProps> = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading
