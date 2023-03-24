import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="og:title" content="成績分布検索サービス - iNAZO" />
        <meta name="og:url" content="https://inazo.hu-jagajaga.com/" />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="北大の成績分布をグラフにしました。ソート検索やブックマークでカスタマイズして、行きたい学部に行こう！"
        />
        <meta name="og:site_name" content="成績分布検索サービス - iNAZO" />
        <meta name="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://inazo.hu-jagajaga.com/logo.png"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon-180x180.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
