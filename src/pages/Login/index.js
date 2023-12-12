import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import LoginImg from '../../assets/login/burguers.png'
import Logo from '../../assets/login/codeburguer logo.svg'
import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  Button,
  SignUpLink,
  FormDiv,
  ErrorMessage
} from './styles'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um e-mail valido.')
      .required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos')
  })
  .required()

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Burguers" />
      <ContainerItens>
        <img src={Logo} />

        <FormDiv>
          <h1>Login</h1>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button type="submit">Login</Button>
          </form>
          <SignUpLink>
            <a>Cadastre-se</a>
          </SignUpLink>
        </FormDiv>
      </ContainerItens>
    </Container>
  )
}

export default Login
