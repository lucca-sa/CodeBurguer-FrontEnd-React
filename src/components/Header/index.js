import React from 'react'
import { useHistory } from 'react-router-dom'

import CartIcon from '../../assets/header/cart-icon.svg'
import ProfileIcon from '../../assets/header/profile-icon.svg'
import { useUser } from '../../hooks/UserContext'
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
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

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
          <p>Olá, {userData.name}</p>
          <Logout onClick={logoutUser}>Sair</Logout>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
