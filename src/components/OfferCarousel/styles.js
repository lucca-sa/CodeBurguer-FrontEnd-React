import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;

    &:hover {
      border: 2px solid #9758a6;
      background-color: #fff;
      color: #9758a6;
    }

    &:disabled {
      border: none;
      background-color: #bebebf;
      color: #fff;
    }
  }
`

export const OfferImage = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: var(--Theme-Gray-800, #424242);
    font-size: 22px;
    font-weight: 500;
    line-height: 120%; /* 26.4px */
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  height: 50px;
  border-radius: 8px;
  background: #9758a6;
  margin-top: 16px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`
