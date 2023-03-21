import { Link as LinkIcon, Star, Home } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import {
  List,
  SwipeableDrawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Link from 'next/link'

type DrawerRightProps = {
  open: boolean
  toggleDrawer: (
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const drawerWidth = 240

export default function DrawerRight({ open, toggleDrawer }: DrawerRightProps) {
  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      open={open}
    >
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              mt: '1rem',
              fontWeight: 'bold',
            }}
          >
            サイト内リンク
          </ListSubheader>
        }
      >
        <StyledLink href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>

              <StyledListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </StyledLink>

        <StyledLink href="/search">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>

              <StyledListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
        </StyledLink>

        <StyledLink passHref href="/bookmark">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <StyledListItemText primary="Bookmark" />
            </ListItemButton>
          </ListItem>
        </StyledLink>
      </List>

      <Divider />

      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              mt: '1rem',
              fontWeight: 'bold',
            }}
          >
            外部リンク
          </ListSubheader>
        }
      >
        <ListItem
          disablePadding
          component="a"
          href="https://hu-jagajaga.com/"
          target="_blank"
        >
          <ListItemButton>
            <ListItemIcon>
              <Image
                src="/JagaJaga_logo.png"
                width={27}
                height={27}
                alt="JagaJaga_logo"
              />
            </ListItemIcon>

            <StyledListItemText primary="JagaJaga" />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  )
}

const StyledListItemText = styled(ListItemText)({
  color: 'black',
})

const StyledLink = styled(Link)({
  textDecoration: 'none',
})
