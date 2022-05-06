import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Category } from '@chec/commerce.js/types/category'
import { Asset } from '@chec/commerce.js/types/asset'

import Grid from '@material-ui/core/Grid'

import { commerce } from '../../../lib/commerce'
import ArtistItem from '../ArtistItem/ArtistItem'

const ArtistList = () => {
  const location = useLocation()

  type ArtistListType = (Category & { assets: Asset[] })[]

  const [artistList, setArtistList] = useState<ArtistListType>([])

  commerce.categories.list().then(({ data }) => {
    const artists = data.find(
      ({ slug }) => slug === location.pathname.slice(1)
    ) as Category & { children: ArtistListType }

    if (artists?.children && !artistList.length) {
      setArtistList(artists.children)
    }
  })

  return (
    <>
      {artistList?.length > 0 && (
        <Grid container justifyContent="center" spacing={4}>
          {artistList.map((artist, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <ArtistItem
                  artistName={artist.name}
                  artistUrl={artist?.assets[0].url ?? ''}
                  artistId={artist.id}
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
