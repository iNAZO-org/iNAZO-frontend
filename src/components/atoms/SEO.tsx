import { FC, ReactNode } from 'react'

import Head from 'next/head'

type SEOProps = {
  title: string
  children?: ReactNode
}

const SEO: FC<SEOProps> = ({ title, children }) => {
  return (
    <Head>
      <title>{title} | 成績分布検索サービス iNAZO</title>
      {children}
    </Head>
  )
}

export default SEO
