import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Cart,
  ArtworkList,
  TopNavbar,
  Checkout,
  SideNavbar,
} from './components'
import { commerce } from './lib/commerce'
import { Product } from '@chec/commerce.js/types/product'
import { Cart as CartType } from '@chec/commerce.js/types/cart'
import { CheckoutCapture } from '@chec/commerce.js/types/checkout-capture'

const App = () => {
  const [artworkList, setArtworkList] = useState<Product[]>([])
  const [cart, setCart] = useState<CartType | null>(null)
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile)

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 700)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    setIsSidebarOpen(!isMobile)
  }, [isMobile])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const fetchArtworkList = async () => {
    const { data } = await commerce.products.list()

    setArtworkList(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (
    productId: string,
    quantity: number | undefined
  ) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId: string, quantity: any) => {
    const response = await commerce.cart.update(lineItemId, { quantity })

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (lineItemId: string) => {
    const response = await commerce.cart.remove(lineItemId)

    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()

    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (
    checkoutTokenId: string,
    newOrder: CheckoutCapture
  ) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error: any) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchArtworkList()
    fetchCart()
  }, [])

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        {isSidebarOpen && (
          <SideNavbar isMobile={isMobile} toggleSidebar={toggleSidebar} />
        )}
        <TopNavbar
          totalItems={cart?.total_items ?? 0}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />

        <Switch>
          <Route exact path="/">
            <ArtworkList
              artworkList={artworkList}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
