import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Body,
  Container,
  EmptyCart,
  Header,
  QuantityContainer,
  TotalContainer
} from './styles'

export function CartItems() {
  const {
    cartProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
    deleteProductFromCart
  } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preços</p>
        <p style={{ paddingRight: 30 }}>Quantidades</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p className="productName">{product.name}</p>
            <p>
              <span>{product.formatedPrice}</span>
            </p>
            <QuantityContainer style={{ paddingLeft: 30 }}>
              <button onClick={() => decreaseProductQuantity(product.id)}>
                -
              </button>
              <p>
                <span>{product.quantity}</span>
              </p>
              <button onClick={() => increaseProductQuantity(product.id)}>
                +
              </button>
            </QuantityContainer>
            <TotalContainer>
              <p>
                <span>{formatCurrency(product.quantity * product.price)}</span>
              </p>
              <button onClick={() => deleteProductFromCart(product.id)}>
                X
              </button>
            </TotalContainer>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
