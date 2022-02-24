import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Drawer, MenuList, MenuItem } from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { navItems } from './navItems'

type Props = {
  isMobile: boolean
  toggleSidebar: () => void
}

const SideNavbar = ({ isMobile, toggleSidebar }: Props) => {
  const location = useLocation()

  const SidenavItem: FC = ({ children }) => (
    <div onClick={isMobile ? toggleSidebar : undefined}>{children}</div>
  )

  return (
    <Drawer anchor="left" variant="permanent" style={{ width: 220 }}>
      <div style={{ width: 220, margin: `${isMobile ? '60' : '90'}px 0px` }}>
        <MenuList>
          {isMobile && (
            <div style={{ marginLeft: 180 }}>
              <Close onClick={toggleSidebar} />
            </div>
          )}
          {navItems.map((navItem, index) => {
            const color =
              location.pathname === navItem.path ? '#D10A0F' : 'black'

            return (
              <SidenavItem>
                <Link
                  to={navItem.path}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    style={{
                      height: 50,
                    }}
                  >
                    {navItem.icon && (
                      <div style={{ color, marginRight: 10 }}>
                        {navItem.icon}
                      </div>
                    )}
                    <strong style={{ color }}>{navItem.name}</strong>
                  </MenuItem>
                </Link>
              </SidenavItem>
            )
          })}
        </MenuList>
      </div>
    </Drawer>
  )
}

export default SideNavbar
