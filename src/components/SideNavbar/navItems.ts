type NavItem = {
  name: string
  path: string
  icon?: string
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Artwork list',
    path: '/artwork-list',
  },
  {
    name: 'Artists',
    path: '/artists',
  },
  {
    name: 'Art connections',
    path: '/art-connections',
  },
  {
    name: 'About us',
    path: '/about',
  },
]
