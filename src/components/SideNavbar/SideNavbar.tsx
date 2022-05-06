import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Drawer, MenuList, MenuItem, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { theme } from '../../utils/theme'
import { AuthButtons } from '..'

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
              location.pathname === navItem.path
                ? theme.color.blue
                : theme.color.black

            return (
              <SidenavItem key={index}>
                <Link to={navItem.path} style={{ textDecoration: 'none' }}>
                  <MenuItem style={{ height: 50 }}>
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
      {isMobile && (
        <Typography align="center" style={{ marginTop: 40 }} component={'span'}>
          <AuthButtons isMobile />
        </Typography>
      )}
    </Drawer>
  )
}

export default SideNavbar
