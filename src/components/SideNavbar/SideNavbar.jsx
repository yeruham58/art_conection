import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Drawer, MenuList, MenuItem } from '@material-ui/core'
import { navItems } from './navItems'

const SideNavbar = () => {
  const location = useLocation()
  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      style={{ width: 200 }}
    >
      <div style={{ width: 200, margin: '90px 0px' }}>
        <MenuList>
          {navItems.map((navItem, index) => (
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
                <strong
                  style={{
                    color:
                      location.pathname === navItem.path ? '#D10A0F' : 'black',
                  }}
                >
                  {navItem.name}
                </strong>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </div>
    </Drawer>
  )
}

export default SideNavbar
