import React, { useState } from 'react'
import { Category } from '@chec/commerce.js/types/category'
import { Asset } from '@chec/commerce.js/types/asset'

import Grid from '@material-ui/core/Grid'

import { commerce } from '../../../lib/commerce'
import ArtConnectionItem from '../ArtConnectionItem/ArtConnectionItem'

import useStyles from './styles'

const ArtistList = () => {
  const classes = useStyles()

  type ArtConnectionListType = (Category & { assets: Asset[] })[]

  const [artConnectionList, setArtConnectionList] =
    useState<ArtConnectionListType>([])

  commerce.categories.list().then(({ data }) => {
    const artists = data.find(
      ({ slug }) => slug === 'campaigns'
    ) as Category & { children: ArtConnectionListType }

    if (artists?.children && !artConnectionList.length) {
      setArtConnectionList(artists.children)
    }
  })

  return (
    <>
      {artConnectionList?.length > 0 && (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justifyContent="center" spacing={4}>
            {artConnectionList.map((artConnection, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <ArtConnectionItem
                    artConnectionName={artConnection.name}
                    artConnectionUrl={artConnection?.assets[0].url ?? ''}
                    artConnectionId={artConnection.id}
                  />
                </Grid>
              )
            })}
          </Grid>
        </main>
      )}
    </>
  )
}

export default ArtistList
