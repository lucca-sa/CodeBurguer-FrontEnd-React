import React from 'react'

import Banner from '../../assets/cart/banner.svg'
import { CartItems, CartResume } from '../../components'
import { CartImage, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={Banner} alt="Cart Banner" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
