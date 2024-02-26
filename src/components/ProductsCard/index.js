import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import {
  Container,
  ContainerItens,
  Image,
  ProductName,
  ProductPrice
} from './styles'

export function ProductsCard({ product }) {
  const { push } = useHistory()
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </ContainerItens>
    </Container>
  )
}

ProductsCard.propTypes = {
  product: PropTypes.object
}
