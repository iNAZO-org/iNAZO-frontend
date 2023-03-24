import { FC, ReactNode } from 'react'

import Head from 'next/head'

type SEOProps = {
  title: string
  children?: ReactNode
}

const SEO: FC<SEOProps> = ({ title, children }) => {
  const fullTitle = `${title} | 成績分布検索サービス iNAZO`
  return (
    <Head>
      <title>{fullTitle}</title>
      {children}
    </Head>
  )
}

export default SEO
