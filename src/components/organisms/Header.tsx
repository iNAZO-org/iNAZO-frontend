import { Star } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import LinkWithIcon from 'components/molecules/LinkWithIcon'
import { BaseProps } from 'types'
import Image from 'next/image'

type HeaderProps = BaseProps

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            ml: '1rem',
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

        <LinkWithIcon href="/search" icon={<SearchIcon />} sx={{ mr: '1rem' }}>
          SEARCH
        </LinkWithIcon>
        <LinkWithIcon href="/bookmark" icon={<Star />} sx={{ mr: '1rem' }}>
          BOOKMARK
        </LinkWithIcon>
      </Toolbar>
    </AppBar>
  )
}

export default Header
