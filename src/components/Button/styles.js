import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 150px;
  height: 35px;
  background: #9758a6;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  color: #eee;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
