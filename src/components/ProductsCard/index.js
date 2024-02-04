import PropTypes from 'prop-types'
import React from 'react'

import {
  Button,
  Container,
  ContainerItens,
  Image,
  ProductName,
  ProductPrice
} from './styles'

export function ProductsCard({ product }) {
  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </ContainerItens>
    </Container>
  )
}

ProductsCard.propTypes = {
  product: PropTypes.object
}
