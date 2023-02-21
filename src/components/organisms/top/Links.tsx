import { Typography, Box, Link } from '@mui/material'
import { FC, ReactNode } from 'react'

import { BaseProps } from 'types'

type LinkItemProps = BaseProps & {
  href: string
  linkText: string
  children?: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({ href, linkText, children }) => {
  return (
    <Box sx={{ my: '1rem' }}>
      <Typography variant="h6" sx={{ mb: '1rem' }}>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {linkText}
        </Link>
      </Typography>
      <Typography>{children}</Typography>
    </Box>
  )
}

type LinksProps = BaseProps

const Links: FC<LinksProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        background: '#eeeeee',
        p: {
          xs: '3rem 1rem',
          sm: '5rem',
        },
        my: '5rem',
        borderRadius: '1rem',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ mb: '4rem' }}
      >
        Link
      </Typography>

      <LinkItem href="https://twitter.com/iNAZO_HU" linkText="iNAZO公式Twitter">
        更新情報や障害情報をお知らせします。フォロー推薦です。お問い合わせはDMにお願いします。
      </LinkItem>

      <LinkItem
        href="https://hu-jagajaga.com/"
        linkText="JagaJaga - 北大生応援メディア -"
      >
        北大生目線の記事を掲載しています。ぜひご覧ください。
      </LinkItem>

      <LinkItem
        href="https://twitter.com/jagajagahu"
        linkText="JagaJaga公式Twitter"
      >
        北大生に届けたい情報を配信・いいね&RTしています。フォローお待ちしています。
      </LinkItem>

      <LinkItem
        href="http://educate.academic.hokudai.ac.jp/seiseki/GradeDistSerch.aspx"
        linkText="北海道大学 成績分布ＷＥＢ公開システム"
      >
        データ参照先である北海道大学公式のサイトです。本サービスとの併用をお勧めします。
      </LinkItem>
    </Box>
  )
}

export default Links
