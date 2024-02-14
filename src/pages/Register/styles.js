import styled from 'styled-components'

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  color: #fff;
`

export const RegisterImage = styled.img`
  height: 100%;
  width: 58%;

  @media screen and (max-width: 950px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  height: 100%;
  width: 42%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 24.4635rem;
  height: 2.3949rem;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  outline: none;
  padding-left: 10px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`

export const LoginLink = styled.p`
  margin-top: 28px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
`

export const ErrorMessage = styled.p`
  margin-top: 5px;
  margin-bottom: 25px;
  color: #cc1717;
  font-size: 0.875rem;
  font-weight: 400;
`
