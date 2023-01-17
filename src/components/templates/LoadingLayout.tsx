import BasicLayout from './BasicLayout'
import Loading from 'components/atoms/Loading'

import { BaseProps } from 'types'

type LoadingLayoutProps = BaseProps & {
  open: boolean
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({ open }) => {
  return (
    <BasicLayout>
      <Loading open={open} />
    </BasicLayout>
  )
}

export default LoadingLayout
