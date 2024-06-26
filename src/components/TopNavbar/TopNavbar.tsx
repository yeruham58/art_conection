import React from 'react'
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core'
import { ShoppingCart, Menu as MenuIcon } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { paths } from '../../utils/paths'
import { AuthButtons } from '..'
import useStyles from './styles'

type Props = {
  isMobile: boolean
  totalItems: number
  toggleSidebar: () => void
}

const TopNavbar = ({ totalItems, isMobile, toggleSidebar }: Props) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <Drawer anchor="top" variant="permanent">
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          {isMobile && (
            <Typography>
              <MenuIcon onClick={toggleSidebar} />
            </Typography>
          )}
          <Typography
            component={Link}
            to={paths.home}
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
          {!isMobile && <AuthButtons />}
          {![paths.cart, paths.checkout].includes(location.pathname) && (
            <div style={{ marginLeft: 10 }}>
              <IconButton
                component={Link}
                to={paths.cart}
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
    </Drawer>
  )
}

export default TopNavbar
