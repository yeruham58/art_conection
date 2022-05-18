import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Category } from '@chec/commerce.js/types/category'

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import { paths } from '../../../utils/paths'
import { commerce } from '../../../lib/commerce'
import useStyles from './styles'

type Props = {
  artistName: string
  artistUrl: string
  artistId: string
}

const ArtistItem = ({ artistName, artistUrl, artistId }: Props) => {
  const classes = useStyles()

  const [artistCategory, setArtistCategory] = useState<Category | null>(null)

  const fetchArtist = async () => {
    setArtistCategory(await commerce.categories.retrieve(artistId))
  }

  if (!artistCategory) {
    fetchArtist()
  }

  return (
    <Card className={classes.root}>
      <Link to={`${paths.artists}/${artistId}`}>
        <CardMedia
          className={classes.media}
          image={artistUrl}
          title={artistName}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {artistName}
            </Typography>
          </div>
          {artistCategory && (
            <Typography
              dangerouslySetInnerHTML={{
                __html: artistCategory.description ?? '',
              }}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default ArtistItem
