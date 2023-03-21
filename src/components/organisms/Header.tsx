import { FC, useState } from 'react'

import { Star } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Toolbar, Box, IconButton, Backdrop } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import DrawerRight from '@/components/molecules/Drawer'
import LinkWithIcon from '@/components/molecules/LinkWithIcon'
import { BaseProps } from '@/types'

type HeaderProps = BaseProps

const Header: FC<HeaderProps> = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  return (
    <>
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ ...(open && { display: 'none' }), display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerRight open={open} toggleDrawer={toggleDrawer} />
      <Backdrop
        sx={{ color: '#fff' }}
        open={open}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      />
    </>
  )
}

export default Header
