import React, { useState } from 'react'
import { Category } from '@chec/commerce.js/types/category'
import { Asset } from '@chec/commerce.js/types/asset'

import Grid from '@material-ui/core/Grid'

import { commerce } from '../../../lib/commerce'
import ArtistItem from '../ArtistItem/ArtistItem'

const ArtistList = () => {
  type ArtistListType = (Category & { assets: Asset[] })[]

  const [artistList, setArtistList] = useState<ArtistListType>([])

  commerce.categories.list().then(({ data }) => {
    const artists = data.find(({ slug }) => slug === 'artists') as Category & {
      children: ArtistListType
    }

    if (artists?.children && !artistList.length) {
      setArtistList(artists.children)
    }
  })

  return (
    <>
      {artistList?.length > 0 && (
        <Grid container spacing={4}>
          {artistList.map((artist, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ArtistItem
                  artistName={artist.name}
                  artistUrl={artist?.assets[0].url ?? ''}
                  artistId={artist.id}
                  artistSlug={artist.slug}
                />
              </Grid>
            )
          })}
        </Grid>
      )}
    </>
  )
}

export default ArtistList
