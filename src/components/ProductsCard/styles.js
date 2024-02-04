import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  width: max-content;
  height: 200px;
  border-radius: 20px;
  display: flex;
  padding: 16px;
  gap: 12px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 180px;
  border-radius: 20px;
`

export const ProductName = styled.p`
  margin-bottom: 85px;
`

export const ProductPrice = styled.p`
  font-weight: 600;
`

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 35px;
  background-color: #9758a6;
  border: none;
  color: #ffffff;
  border-radius: 20px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
