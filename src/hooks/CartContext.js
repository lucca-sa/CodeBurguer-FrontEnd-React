import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburguer:cartData', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProductFromCart = async productId => {
    if (confirm('Deseja deletar esse produto do carrinho?')) {
      const newCart = cartProducts.filter(product => product.id !== productId)
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    }
  }

  const increaseProductQuantity = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const decreaseProductQuantity = async productId => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProductFromCart(productId)
    }
  }

  useEffect(() => {
    const loadUserCart = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartData')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserCart()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProductQuantity,
        decreaseProductQuantity,
        deleteProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart or CartContext error')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
