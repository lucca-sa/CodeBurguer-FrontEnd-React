import React from 'react'

import Banner from '../../assets/home/banner.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCarousel'
import { Container, HomeImage } from './styles'

function Home() {
  return (
    <Container>
      <HomeImage src={Banner} alt="Home Banner" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}

export default Home
