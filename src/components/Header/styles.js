import styled from 'styled-components'

export const Container = styled.div`
  height: 70px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`
  p {
    font-weight: 300;
    font-size: 1rem;
    color: #555555;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 1rem;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const Logout = styled.a`
  font-weight: bold;
  line-height: 16px;
  font-size: 1rem;
  cursor: pointer;
  color: #9758a6;
`

export const Line = styled.div`
  height: 30px;
  border-right: 0.5px solid #bababa;
  opacity: 0.5;
`
