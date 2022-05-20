import React from 'react'

import { Typography, Divider } from '@material-ui/core'

import { theme } from '../../utils/theme'

type Props = {
  title: string
  isMobile?: boolean
}

const SectionTitle = ({ title, isMobile }: Props) => {
  return (
    <div style={{ marginBottom: 24, marginTop: 24 }}>
      <Divider />
      <Typography
        style={{
          fontSize: isMobile ? 16 : 24,
          fontFamily: 'Gill Sans',
          color: theme.color.blue,
        }}
      >
        {title}
      </Typography>
      <Divider />
    </div>
  )
}

export default SectionTitle
