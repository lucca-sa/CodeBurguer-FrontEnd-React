import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-fee delivery-price';
  }

  .title {
    grid-area: title;
    margin-bottom: 20px;
  }

  .items {
    grid-area: items;
  }

  .items-price {
    grid-area: items-price;
  }

  .delivery-fee {
    grid-area: delivery-fee;
  }

  .delivery-price {
    grid-area: delivery-price;
  }

  .container-bottom {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }
`
