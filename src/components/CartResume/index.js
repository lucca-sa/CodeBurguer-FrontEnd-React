import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import ApiService from '../../services/apiService'
import Fee from '../../utils/deliveryFee'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [cartPrice, setCartPrice] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryFee] = useState(Fee)

  const { cartProducts } = useCart()

  useEffect(() => {
    const cartSum = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setCartPrice(cartSum)
    setFinalPrice(cartSum + deliveryFee)
  }, [cartProducts, deliveryFee])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(ApiService.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado com sucesso!',
      error: 'Falha ao realizar seu pedido, tente novamente...'
    })
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(cartPrice)}</p>
          <p className="delivery-fee">Taxa de entrega</p>
          <p className="delivery-price">{formatCurrency(deliveryFee)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice)}</p>
        </div>
      </Container>
      <Button
        onClick={submitOrder}
        style={{ width: '100%', marginTop: '30px' }}
      >
        Confirmar pedido!
      </Button>
    </div>
  )
}
