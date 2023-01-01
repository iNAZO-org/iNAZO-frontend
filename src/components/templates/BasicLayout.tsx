import { Grid } from '@mui/material'

import Header from 'components/organisms/Header'
import { BaseProps } from 'types'

type BasicLayoutProps = BaseProps & {
  children: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Grid sx={{ marginTop: '4rem', p: '0 0.5rem' }}>{children}</Grid>
    </div>
  )
}

export default BasicLayout
