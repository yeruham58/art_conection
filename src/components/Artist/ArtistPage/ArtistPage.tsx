import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router'

import { ProductCollection } from '@chec/commerce.js/features/products'
import { Category } from '@chec/commerce.js/types/category'
import { Asset } from '@chec/commerce.js/types/asset'
import Grid from '@material-ui/core/Grid'
import { Card } from '@material-ui/core'

import { commerce } from '../../../lib/commerce'
import { paths } from '../../../utils/paths'

import ArtworkItem from '../../Artwork/ArtworkItem/ArtworkItem'
import SectionTitle from '../../common/SeftionTitle'

type ArtistType = Category & { assets: Asset[] }

const ArtistPage = () => {
  const params = useParams() as { slug: string }
  const history = useHistory()
  const [categoryProducts, setCategoryProducts] =
    useState<ProductCollection | null>(null)
  const [artistCategory, setArtistCategory] = useState<ArtistType | null>(null)

  const category_slug = params.slug

  const fetchCategoryProducts = async () => {
    try {
      setCategoryProducts(await commerce.products.list({ category_slug }))
    } catch (e) {
      history.push(paths.artists)
    }
  }

  const fetchArtConnection = async (id: string) => {
    setArtistCategory((await commerce.categories.retrieve(id)) as ArtistType)
  }

  if (!categoryProducts) {
    fetchCategoryProducts()
  }

  if (categoryProducts?.data && !artistCategory) {
    const categoryId =
      categoryProducts?.data[0].categories.find(
        ({ slug }) => slug === category_slug
      )?.id ?? ''
    fetchArtConnection(categoryId)
  }

  return (
    <>
      {artistCategory && (
        <>
          <Card style={{ marginBottom: 24 }}>
            <img
              src={artistCategory?.assets[0].url ?? ''}
              alt="connection"
              style={{ width: '100%' }}
            />
          </Card>
          <SectionTitle title={artistCategory.name} />
        </>
      )}

      {categoryProducts?.data && (
        <Grid container spacing={4}>
          {categoryProducts.data.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ArtworkItem artwork={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ArtistPage
