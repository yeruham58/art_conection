import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import { Product } from '@chec/commerce.js/types/product'
import { Category } from '@chec/commerce.js/types/category'

import { paths } from '../../../utils/paths'
import { commerce } from '../../../lib/commerce'

import useStyles from './styles'

type Props = {
  artwork: Product
  onAddToCart?: (artworId: string, anount: number) => void
  artistCategoryId?: string
}

const ArtworkItem = ({ artwork, onAddToCart, artistCategoryId }: Props) => {
  const [artistCategory, setArtistCategory] = useState<Category | null>(null)

  const fetchArtist = async (artistCategoryId: string) => {
    setArtistCategory(await commerce.categories.retrieve(artistCategoryId))
  }

  const classes = useStyles()

  if (!artistCategory && artistCategoryId) {
    fetchArtist(artistCategoryId)
  }

  const handleAddToCart = onAddToCart ? () => onAddToCart(artwork.id, 1) : null

  return (
    <Card className={classes.root}>
      <Link to={`${paths.artworkList}/${artwork.id}`}>
        <CardMedia
          className={classes.media}
          image={artwork?.image?.url}
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
        <>
          {handleAddToCart && (
            <CardActions disableSpacing className={classes.cardActions}>
              <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          )}
        </>
      </Link>
    </Card>
  )
}

export default ArtworkItem
