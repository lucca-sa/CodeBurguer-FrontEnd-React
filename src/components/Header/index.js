import React from 'react'
import { useHistory } from 'react-router-dom'

import CartIcon from '../../assets/header/cart-icon.svg'
import ProfileIcon from '../../assets/header/profile-icon.svg'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  Logout,
  PageLink
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={CartIcon} alt="Carrinho" />
        </PageLink>
        <Line />
        <PageLink>
          <img src={ProfileIcon} alt="Perfil" />
        </PageLink>

        <ContainerText>
          <p>Olá, Lucca</p>
          <Logout>Sair</Logout>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
