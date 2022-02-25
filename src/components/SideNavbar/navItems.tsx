import React, { ReactElement } from 'react'
import {
  Home,
  Collections,
  ColorLens,
  Info,
  CardGiftcard,
} from '@material-ui/icons'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

import { paths } from '../../utils/paths'

type NavItem = {
  name: string
  path: string
  icon?: ReactElement
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    path: paths.home,
    icon: <Home />,
  },
  {
    name: 'Artwork list',
    path: paths.artworkList,
    icon: <Collections />,
  },
  {
    name: 'Artists',
    path: paths.artists,
    icon: <ColorLens />,
  },
  {
    name: 'Art connections',
    path: paths.artConnections,
    icon: <VolunteerActivismIcon />,
  },
  {
    name: 'Gift cards',
    path: paths.giftCards,
    icon: <CardGiftcard />,
  },
  {
    name: 'About us',
    path: paths.about,
    icon: <Info />,
  },
]
