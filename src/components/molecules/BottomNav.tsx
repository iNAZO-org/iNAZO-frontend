import { FC, SyntheticEvent, useEffect, useState } from 'react'

import { Home, Star, Search } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { BaseProps } from '@/types'

const HOME_BOTTOMNAV_VALUE = 0
const SEARCH_BOTTOMNAV_VALUE = 1
const BOOKMARK_BOTTOMNAV_VALUE = 2
const JAGAJAGA_BOTTOMNAV_VALUE = 3

type BottomNavProps = BaseProps

const BottomNav: FC<BottomNavProps> = ({ sx }) => {
  const [bottomNavValue, setBottomNavValue] = useState(-1)
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      if (router.pathname === '/') {
        setBottomNavValue(HOME_BOTTOMNAV_VALUE)
      } else if (router.pathname === '/search') {
        setBottomNavValue(SEARCH_BOTTOMNAV_VALUE)
      } else if (router.pathname === '/bookmark') {
        setBottomNavValue(BOOKMARK_BOTTOMNAV_VALUE)
      }
    }
  }, [router.isReady])

  const handleOnChange = async (
    _: SyntheticEvent<Element, Event>,
    newValue: number,
  ) => {
    if (newValue === HOME_BOTTOMNAV_VALUE) {
      await router.push('/')
      setBottomNavValue(newValue)
    } else if (newValue === SEARCH_BOTTOMNAV_VALUE) {
      await router.push('/search')
      setBottomNavValue(newValue)
    } else if (newValue === BOOKMARK_BOTTOMNAV_VALUE) {
      await router.push('/bookmark')
      setBottomNavValue(newValue)
    } else if (newValue === JAGAJAGA_BOTTOMNAV_VALUE) {
      // 別タブで開く
      window.open('https://hu-jagajaga.com/', '_blank')
    }
  }

  return (
    <Paper
      sx={{
        ...sx,
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={bottomNavValue}
        onChange={handleOnChange}
        sx={{ mx: '1rem' }}
      >
        <BottomNavigationAction label="home" icon={<Home />} />
        <BottomNavigationAction label="search" icon={<Search />} />
        <BottomNavigationAction label="bookmark" icon={<Star />} />
        <BottomNavigationAction
          label="JagaJaga"
          icon={
            <Image
              src="/JagaJaga_logo.png"
              width={27}
              height={27}
              alt="JagaJaga_logo"
            />
          }
        />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
