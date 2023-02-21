import { Container } from '@mui/material'
import Footer from 'components/organisms/Footer'

import Header from 'components/organisms/Header'
import { BaseProps } from 'types'

type BasicLayoutProps = BaseProps & {
  children: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Container sx={{ marginTop: '4rem' }}>{children}</Container>
      <Footer />
    </div>
  )
}

export default BasicLayout
