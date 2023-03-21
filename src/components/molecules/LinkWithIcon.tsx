import { FC } from 'react'

import { Box } from '@mui/material'
import MuiLink from '@mui/material/Link'
import Link from 'next/link'

import type { LinkProps } from '@mui/material/Link'

type LinkWithIconProps = LinkProps & {
  href: string
  color?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

const LinkWithIcon: FC<LinkWithIconProps> = (props) => {
  const { href, icon, color = 'white', children, sx, ...leftProps } = props
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <MuiLink
        component="span"
        {...leftProps}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: color,
          ...sx,
        }}
      >
        <Box
          component="span"
          sx={{
            m: '0 0.5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            lineHeight: 1,
            '&:hover': { borderBottom: '1px solid white' },
          }}
        >
          {children}
        </Box>
      </MuiLink>
    </Link>
  )
}

export default LinkWithIcon
