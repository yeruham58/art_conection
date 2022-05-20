import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@material-ui/core'

import { theme } from '../../utils/theme'

import blackBackground from '../../assets/iconBlackBackground.png'
import yellowBackground from '../../assets/background-2.jpg'
import { paths } from '../../utils/paths'

import { ArtworkList, ArtConnectionList, ArtistList } from '..'
import SectionTitle from '../common/SeftionTitle'

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
              margin: isMobile ? 16 : 30,
              fontFamily: 'cursive',
              fontSize: isMobile ? 30 : 60,
            }}
          >
            Let art take the world - <br /> one step forward!
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

      <Card style={{ marginTop: 24 }}>
        <div
          style={{
            backgroundImage: `url(${yellowBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              minHeight: isMobile ? 300 : 400,
              minWidth: isMobile ? 200 : 500,
              paddingLeft: '60%',
              paddingTop: 15,
              textAlign: 'center',
              fontFamily: 'cursive',
              fontSize: isMobile ? 40 : 60,
            }}
          >
            <div style={{ maxWidth: isMobile ? 100 : 180 }}>
              <div>Proud to bee a part of it!!!</div>
              <Link
                to={paths.about}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    border: 1,
                    borderRadius: '25px',
                    fontSize: 12,
                    fontFamily: 'serif',
                    cursor: 'pointer',
                    margin: 10,
                  }}
                >
                  More about us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      <SectionTitle isMobile={isMobile} title="Our artworks" />
      <ArtworkList onAddToCart={onAddToCart} />
      <Card style={{ marginTop: 24 }}>
        <div
          style={{
            backgroundColor: theme.color.blue,
            color: theme.color.yellow,
            textAlign: 'center',
            padding: 50,
            fontSize: isMobile ? 20 : 60,
            fontFamily: 'Fantasy',
          }}
        >
          <strong>
            "Alone we can do so little, <br /> together we can do so much."
          </strong>
          <div style={{ fontSize: 16, margin: 24 }}>Helen Keller</div>
        </div>
      </Card>
      <SectionTitle isMobile={isMobile} title="Our artists" />
      <ArtistList />
      <Card style={{ backgroundColor: 'black', marginTop: 24 }}>
        <div style={{ color: 'white', margin: 20 }}>
          <div style={{ marginTop: 10 }}>About us</div>
          <div style={{ marginTop: 10 }}>Our return policy</div>
          <div style={{ marginTop: 10 }}>Our colaberations</div>
        </div>
      </Card>
    </>
  )
}

export default HomePage
