import React from 'react'
import { Home, Collections, ColorLens, Info } from '@material-ui/icons'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import { ReactElement } from 'react'

type NavItem = {
  name: string
  path: string
  icon?: ReactElement
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    name: 'Artwork list',
    path: '/artwork-list',
    icon: <Collections />,
  },
  {
    name: 'Artists',
    path: '/artists',
    icon: <ColorLens />,
  },
  {
    name: 'Art connections',
    path: '/art-connections',
    icon: <VolunteerActivismIcon />,
  },
  {
    name: 'About us',
    path: '/about',
    icon: <Info />,
  },
]
