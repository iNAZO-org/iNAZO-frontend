import { Star } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import LinkWithIcon from 'components/molecules/LinkWithIcon'
import { BaseProps } from 'types'

type HeaderProps = BaseProps

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h4"
              sx={{
                display: 'inline-block',
                fontFamily: 'Oswald',
                color: 'white',
                ml: '1rem',
                mb: '0.2rem',
              }}
            >
              iNAZO
            </Typography>
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
