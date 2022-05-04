import React from 'react'
import { ArtworkList } from '../..'

type Props = {
  onAddToCart: (productId: string, quantity: number | undefined) => void
}

const HomePage = ({ onAddToCart }: Props) => {
  return <ArtworkList onAddToCart={onAddToCart} />
}

export default HomePage
