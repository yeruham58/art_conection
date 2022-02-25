import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

import { paths } from '../../../utils/paths'
import { theme } from '../../../utils/theme'

type Props = {
  isMobile?: boolean
  onClick?: () => void
}

const AuthButtons = ({ isMobile, onClick }: Props) => {
  const location = useLocation()

  const isInLoginPage = location.pathname === paths.login
  const isInSignupPage = location.pathname === paths.signup

  return (
    <ButtonGroup
      aria-label="text button group"
      size="small"
      variant={isMobile ? 'outlined' : 'text'}
      onClick={onClick}
    >
      <Button
        component={Link}
        to={paths.login}
        disabled={isInLoginPage}
        onClick={onClick}
      >
        <strong style={{ color: isInLoginPage ? undefined : theme.color.blue }}>
          Login
        </strong>
      </Button>
      <Button component={Link} to={paths.signup} disabled={isInSignupPage}>
        <strong
          style={{ color: isInSignupPage ? undefined : theme.color.blue }}
        >
          Sign up
        </strong>
      </Button>
    </ButtonGroup>
  )
}

export default AuthButtons
