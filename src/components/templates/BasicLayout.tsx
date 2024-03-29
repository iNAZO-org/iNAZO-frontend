import { FC } from 'react'

import { Container } from '@mui/material'

import { BaseProps } from '@/types'

import BottomNav from 'components/molecules/BottomNav'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

type BasicLayoutProps = BaseProps & {
  children: React.ReactNode
}

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container sx={{ marginTop: '4rem', flex: 1 }}>{children}</Container>
      <Footer />
      {/* スマホのみ表示 */}
      <BottomNav sx={{ display: { xs: 'block', sm: 'none' } }} />
    </div>
  )
}

export default BasicLayout
