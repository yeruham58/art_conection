import React, { useState } from 'react'
import { useParams } from 'react-router'

import { ProductCollection } from '@chec/commerce.js/features/products'
import { Category } from '@chec/commerce.js/types/category'
import { Asset } from '@chec/commerce.js/types/asset'
import Grid from '@material-ui/core/Grid'
import { Card } from '@material-ui/core'

import { commerce } from '../../../lib/commerce'

import ArtworkItem from '../../Artwork/ArtworkItem/ArtworkItem'
import SectionTitle from '../../common/SeftionTitle'

type ArtConnectionType = Category & { assets: Asset[] }

const ArtConnectionPage = () => {
  const params = useParams() as { slug: string }
  const [categoryProducts, setCategoryProducts] =
    useState<ProductCollection | null>(null)
  const [artConnectionCategory, setArtConnectionCategory] =
    useState<ArtConnectionType | null>(null)

  const category_slug = params.slug

  const fetchCategoryProducts = async () => {
    setCategoryProducts(await commerce.products.list({ category_slug }))
  }

  const fetchArtConnection = async (id: string) => {
    setArtConnectionCategory(
      (await commerce.categories.retrieve(id)) as ArtConnectionType
    )
  }

  if (!categoryProducts) {
    fetchCategoryProducts()
  }

  if (categoryProducts?.data && !artConnectionCategory) {
    const categoryId =
      categoryProducts?.data[0].categories.find(
        ({ slug }) => slug === category_slug
      )?.id ?? ''
    fetchArtConnection(categoryId)
  }

  return (
    <>
      {artConnectionCategory && (
        <>
          <Card style={{ marginBottom: 24 }}>
            <img
              src={artConnectionCategory?.assets[0].url ?? ''}
              alt="connection"
              style={{ width: '100%' }}
            />
          </Card>
          <SectionTitle title={artConnectionCategory.name} />
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

export default ArtConnectionPage
