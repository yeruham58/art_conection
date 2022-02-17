import React from 'react'
import { Link } from 'react-router-dom'

import { Drawer, Typography } from '@material-ui/core'
import { navItems } from './navItems'

const SideNavbar = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      style={{ width: 200 }}
    >
      <div style={{ width: 200, margin: '90px 0px' }}>
        <Typography>
          {navItems.map((navItem, index) => (
            <div>
              <Link to={navItem.path} key={index}>
                {navItem.name}
              </Link>
            </div>
          ))}
        </Typography>
      </div>
    </Drawer>
  )
}

export default SideNavbar
