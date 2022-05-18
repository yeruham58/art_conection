import React from 'react'
import { Button, Menu, MenuItem, Box } from '@material-ui/core'

import Google from '@mui/icons-material/Google'
import Logout from '@mui/icons-material/Logout'

import defaultProfileImg from '../../../assets/defaultProfileImg.png'
import { useGoogleAuth } from '../store/context'
import { theme } from '../../../utils/theme'

type Props = {
  isMobile?: boolean
}

const AuthButtons = ({ isMobile }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { signIn, isSignedIn, googleUser, signOut } = useGoogleAuth()

  const googleLoginButton = (
    <Button onClick={signIn} variant={isMobile ? 'text' : 'outlined'}>
      <strong style={{ color: theme.color.blue, margin: 8 }}>
        Sign in with Google
      </strong>
      <Google style={{ color: theme.color.red }} />
    </Button>
  )

  const logoutButtonContent = (
    <>
      <Logout style={{ color: theme.color.blue }} />
      <strong style={{ color: theme.color.blue, margin: 8 }}>Sign out</strong>
    </>
  )

  console.log(googleUser?.profileObj?.imageUrl)

  const googleLogoutButton = (
    <>
      {isMobile ? (
        <Button onClick={signOut} variant="outlined">
          {logoutButtonContent}
        </Button>
      ) : (
        <div>
          <Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ margin: 16, fontSize: 16 }}>
                Welcome {googleUser?.profileObj?.givenName}!
              </strong>
              <img
                alt="profile pic"
                src={googleUser?.profileObj?.imageUrl ?? defaultProfileImg}
                onClick={handleClick}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              />
            </div>
          </Box>

          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            style={{ marginTop: 38 }}
          >
            <MenuItem
              onClick={() => {
                handleClose()
                signOut()
              }}
            >
              {logoutButtonContent}
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  )

  return <>{isSignedIn ? googleLogoutButton : googleLoginButton}</>
}

export default AuthButtons
