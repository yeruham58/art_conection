import React from 'react'

type Props = {
  artistName: string
  artistTitle: string
  artistUrl: string
}

const ArtistItem = ({ artistName }: Props) => {
  return <>{artistName}</>
}

export default ArtistItem
