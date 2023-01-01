import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Head from 'next/head'
import * as React from 'react'

import Header from 'components/organisms/Header'
import DescribeiNAZO from 'components/organisms/top/DescribeiNAZO'
import FeatureiNAZO from 'components/organisms/top/FeatureiNAZO'
import Links from 'components/organisms/top/Links'
import Question from 'components/organisms/top/Question'
import BasicLayout from 'components/templates/BasicLayout'

const App = () => {
  return (
    <div>
      <Head>
        <title>ホームページ</title>
      </Head>
      <BasicLayout>
        <DescribeiNAZO />
        <FeatureiNAZO />
        <Question />
        <Links />
      </BasicLayout>
    </div>
  )
}

export default App
