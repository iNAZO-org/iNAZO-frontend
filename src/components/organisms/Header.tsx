import { Star } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import LinkWithIcon from 'components/molecules/LinkWithIcon'
import { BaseProps } from 'types'

type HeaderProps = BaseProps

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          iNAZO
        </Typography>
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
