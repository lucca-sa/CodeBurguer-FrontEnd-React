import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offer from '../../assets/home/OFERTAS.png'
import ApiService from '../../services/apiService'
import formatCurrency from '../../utils/formatCurrency'
import { Button, Container, ContainerItems, Image, OfferImage } from './styles'

function OfferCarousel() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadproducts() {
      const { data } = await ApiService.get('products')

      const productsOnOffer = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setProducts(productsOnOffer)
    }
    loadproducts()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OfferImage src={Offer} alt="Offer Logo" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {products &&
          products.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="product picture" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button>Peça Agora!</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OfferCarousel
