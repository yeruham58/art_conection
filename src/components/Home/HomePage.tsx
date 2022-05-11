import React from 'react'

import { Card, Typography, Divider } from '@material-ui/core'

import { theme } from '../../utils/theme'

import blackBackground from '../../assets/iconBlackBackground.png'

import { ArtworkList, ArtConnectionList, ArtistList } from '..'
import SectionTitle from './SeftionTitle'

type Props = {
  onAddToCart: (productId: string, quantity: number | undefined) => void
  isMobile: boolean
}

const HomePage = ({ onAddToCart, isMobile }: Props) => {
  return (
    <>
      <Card style={{ width: '100%', background: 'black', marginBottom: 16 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: theme.color.red,
              margin: isMobile ? 12 : 30,
              fontFamily: 'cursive',
              fontSize: isMobile ? 30 : 60,
            }}
          >
            Let art take the world one step forward
          </div>
          <img
            alt="hulfLogo"
            src={blackBackground}
            style={{
              maxWidth: isMobile ? 120 : 180,
              height: isMobile ? 200 : 300,
            }}
          />
        </div>
      </Card>

      <SectionTitle isMobile={isMobile} title="Our Projects" />
      <ArtConnectionList />
      <SectionTitle isMobile={isMobile} title="Our artworks" />
      <ArtworkList onAddToCart={onAddToCart} />
      <SectionTitle isMobile={isMobile} title="Our artists" />
      <ArtistList />
    </>
  )
}

export default HomePage
