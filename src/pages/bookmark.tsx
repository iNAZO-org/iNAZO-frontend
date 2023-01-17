import { Alert, Typography } from '@mui/material'
import Head from 'next/head'

import BasicLayout from 'components/templates/BasicLayout'

const Search = () => {
  return (
    <>
      <Head>
        <title>BookMark</title>
      </Head>
      <BasicLayout>
        {
          <Alert severity="info">
            <Typography component="span" fontWeight="600">
              お気に入り
            </Typography>
          </Alert>
        }
      </BasicLayout>
    </>
  )
}

export default Search
