import { Star } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import LinkWithIcon from 'components/molecules/LinkWithIcon'
import { BaseProps } from 'types'

type HeaderProps = BaseProps

const Header: FC<HeaderProps> = () => {
  const router = useRouter()

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            ml: '0.5rem',
            '&:hover': {
              opacity: 0.7,
            },
          }}
        >
          <Link href="/">
            <Image
              src="/iNAZO_logo.png"
              alt="iNAZO logo"
              width={150}
              height={45}
            />
          </Link>
        </Box>

        <LinkWithIcon
          href="/search"
          icon={<SearchIcon />}
          sx={{
            mr: '1rem',
            opacity: 0.7,
            fontWeight: 600,
            display: {
              xs: 'none',
              sm: 'flex',
            },
            ...(router.pathname === '/search' && {
              opacity: 1,
            }),
          }}
        >
          SEARCH
        </LinkWithIcon>
        <LinkWithIcon
          href="/bookmark"
          icon={<Star />}
          sx={{
            mr: '1rem',
            opacity: 0.7,
            fontWeight: 600,
            display: {
              xs: 'none',
              sm: 'flex',
            },
            ...(router.pathname === '/bookmark' && {
              opacity: 1,
            }),
          }}
        >
          BOOKMARK
        </LinkWithIcon>
      </Toolbar>
    </AppBar>
  )
}

export default Header
