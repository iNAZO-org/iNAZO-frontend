import { FC } from 'react'

import Loading from '@/components/atoms/Loading'
import { BaseProps } from '@/types'

import BasicLayout from './BasicLayout'

type LoadingLayoutProps = BaseProps & {
  open: boolean
}

const LoadingLayout: FC<LoadingLayoutProps> = ({ open }) => {
  return (
    <BasicLayout>
      <Loading open={open} />
    </BasicLayout>
  )
}

export default LoadingLayout
