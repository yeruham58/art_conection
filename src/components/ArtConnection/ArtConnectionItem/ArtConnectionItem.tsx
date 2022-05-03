import React, { useState } from 'react'
import { Category } from '@chec/commerce.js/types/category'

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import { commerce } from '../../../lib/commerce'
import useStyles from './styles'

type Props = {
  artConnectionName: string
  artConnectionUrl: string
  artConnectionId: string
}

const ArtConnectionItem = ({
  artConnectionName,
  artConnectionUrl,
  artConnectionId,
}: Props) => {
  const classes = useStyles()

  const [artConnectionCategory, setArtConnectionCategory] =
    useState<Category | null>(null)

  const fetchArtConnection = async () => {
    setArtConnectionCategory(
      await commerce.categories.retrieve(artConnectionId)
    )
  }

  if (!artConnectionCategory) {
    fetchArtConnection()
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={artConnectionUrl}
        title={artConnectionName}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {artConnectionName}
          </Typography>
        </div>
        {artConnectionCategory && (
          <Typography
            dangerouslySetInnerHTML={{
              __html: artConnectionCategory.description ?? '',
            }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        )}
      </CardContent>
    </Card>
  )
}

export default ArtConnectionItem
