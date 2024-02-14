import React from 'react'

import Banner from '../../assets/cart/banner.svg'
import { CartItems } from '../../components'
import { CartImage, Container } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={Banner} alt="Cart Banner" />
      <CartItems />
    </Container>
  )
}
