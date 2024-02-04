import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100dvh;
`

export const BannerImage = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 44px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
  color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
  line-height: 20px;
  font-size: 1.0625rem;
  font-weight: 600;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 30px;
  padding: 40px;
  justify-content: center;
`
