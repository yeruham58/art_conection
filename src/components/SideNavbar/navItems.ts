type NavItem = {
  name: string
  path: string
  icon?: string
}

export const navItems: NavItem[] = [
  {
    name: 'Artwork list',
    path: 'artwork-list',
  },
  {
    name: 'Artists',
    path: 'artists',
  },
  {
    name: 'Art connections',
    path: 'art-connections',
  },
]
