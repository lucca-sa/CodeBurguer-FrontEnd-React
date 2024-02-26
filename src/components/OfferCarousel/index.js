import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Offer from '../../assets/home/OFERTAS.png'
import { useCart } from '../../hooks/CartContext'
import ApiService from '../../services/apiService'
import formatCurrency from '../../utils/formatCurrency'
import { Button, Container, ContainerItems, Image, OfferImage } from './styles'

export function OfferCarousel() {
  const { push } = useHistory()
  const [products, setProducts] = useState([])
  const { putProductInCart } = useCart()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await ApiService.get('products')

      const productsOnOffer = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setProducts(productsOnOffer)
    }
    loadProducts()
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
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça Agora!
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
