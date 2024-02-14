import PropTypes from 'prop-types'
import React from 'react'

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
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </ContainerItens>
    </Container>
  )
}

ProductsCard.propTypes = {
  product: PropTypes.object
}
