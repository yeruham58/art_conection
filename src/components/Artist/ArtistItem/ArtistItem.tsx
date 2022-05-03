import React, { useState } from 'react'
import { Category } from '@chec/commerce.js/types/category'

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

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

  console.log(artistCategory)

  return (
    <>
      {artistCategory && (
        <Card className={classes.root}>
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
            <Typography
              dangerouslySetInnerHTML={{
                __html: artistCategory.description ?? '',
              }}
              variant="body2"
              color="textSecondary"
              component="p"
            />
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default ArtistItem
