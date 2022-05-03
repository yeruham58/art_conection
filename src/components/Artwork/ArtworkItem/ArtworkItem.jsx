import React, { useState } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { commerce } from '../../../lib/commerce'

import useStyles from './styles'

const ArtworkItem = ({ artwork, onAddToCart, artistCategoryId }) => {
  const [artistCategory, setArtistCategory] = useState(null)

  const fetchArtist = async () => {
    setArtistCategory(await commerce.categories.retrieve(artistCategoryId))
  }

  const classes = useStyles()

  if (!artistCategory && artistCategoryId) {
    fetchArtist()
  }

  console.log(artistCategory)

  const handleAddToCart = () => onAddToCart(artwork.id, 1)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={artwork.image.url}
        title={artwork.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {artwork.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${artwork.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: artwork.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ArtworkItem
