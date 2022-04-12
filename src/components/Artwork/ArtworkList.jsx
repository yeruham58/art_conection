import React from 'react'
import Grid from '@material-ui/core/Grid'

import ArtworkItem from './ArtworkItem/ArtworkItem'
import useStyles from './styles'

const ArtworkList = ({ artworkList, onAddToCart }) => {
  const classes = useStyles()

  if (!artworkList.length) return <p>Loading...</p>

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {[
          artworkList[0],
          artworkList[0],
          artworkList[0],
          artworkList[0],
          artworkList[0],
          artworkList[0],
          artworkList[0],
          artworkList[0],
        ].map((artwork, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ArtworkItem artwork={artwork} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default ArtworkList
