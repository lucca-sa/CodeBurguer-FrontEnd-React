import React from 'react'

import Banner from '../../assets/home/banner.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImage src={Banner} alt="Home Banner" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
