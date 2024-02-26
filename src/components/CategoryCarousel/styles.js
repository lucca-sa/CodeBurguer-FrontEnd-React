import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    &:hover {
      border: 2px solid #9758a6;
      background-color: #efefef;
      color: #9758a6;
    }

    &:disabled {
      border: none;
      background-color: #bebebf;
      color: #efefef;
    }
  }
`

export const CategoryImage = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  height: 50px;
  border-radius: 8px;
  background: #9758a6;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`
