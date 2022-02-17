import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import useStyles from './styles'

const TopNavbar = ({ totalItems }: { totalItems: number }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const classes = useStyles()
  const location = useLocation()

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Drawer anchor="top" open={true} variant="permanent">
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="artConection.img"
              height="50px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Drawer>
  )
}

export default TopNavbar
