import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  gap: 10px 15px;

  p {
    font-size: 1rem;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 15px;
  gap: 10px 15px;

  img {
    border-radius: 15px;
    width: 135px;
  }

  p {
    font-size: 1rem;
    span {
      font-weight: 600;
    }
  }

  .productName {
    width: 80px;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: 700;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  button {
    border: none;
    background: none;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    margin-top: -7px;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;

  button {
    border: none;
    background: none;
    font-weight: 700;
    color: red;
    cursor: pointer;
  }
`
