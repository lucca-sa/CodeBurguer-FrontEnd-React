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
  margin-bottom: 10px;
`
