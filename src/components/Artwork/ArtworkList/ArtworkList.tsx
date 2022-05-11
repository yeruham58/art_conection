import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

import { Product } from '@chec/commerce.js/types/product'

import { commerce } from '../../../lib/commerce'

import ArtworkItem from '../ArtworkItem/ArtworkItem'

type Props = {
  onAddToCart: (productId: string, quantity: number | undefined) => void
}

const ArtworkList = ({ onAddToCart }: Props) => {
  const [artworkList, setArtworkList] = useState<Product[]>([])

  const fetchArtworkList = async () => {
    const { data } = await commerce.products.list()

    setArtworkList(data)
  }

  useEffect(() => {
    fetchArtworkList()
  }, [])

  if (!artworkList.length) return <p>Loading...</p>

  return (
    <Grid container spacing={4}>
      {artworkList.map((artwork, index) => {
        const artistCategory = artwork?.categories?.find(
          ({ name }) => name === artwork.seo.title
        )

        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ArtworkItem
              artwork={artwork}
              onAddToCart={onAddToCart}
              artistCategoryId={artistCategory?.id}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ArtworkList
