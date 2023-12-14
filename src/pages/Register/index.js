import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Logo from '../../assets/login/codeburguer logo.svg'
import RegisterImg from '../../assets/register/burgos.png'
import ContainerButton from '../../components/Button/index'
import { ApiService } from '../../services/apiService'
import {
  Container,
  ContainerItens,
  RegisterImage,
  Label,
  Input,
  LoginLink,
  FormDiv,
  ErrorMessage
} from './styles'

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup
      .string()
      .email('Digite um e-mail valido.')
      .required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    confirmpassword: yup
      .string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })
  .required()

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await ApiService.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Burguers" />
      <ContainerItens>
        <img src={Logo} />

        <FormDiv>
          <h1>Register</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

            <Label>Confirme sua Senha</Label>
            <Input
              type="password"
              {...register('confirmpassword')}
              error={errors.confirmpassword?.message}
            />
            <ErrorMessage>{errors.confirmpassword?.message}</ErrorMessage>

            <ContainerButton $type="submit">Register</ContainerButton>
          </form>
          <LoginLink>
            <a>Login</a>
          </LoginLink>
        </FormDiv>
      </ContainerItens>
    </Container>
  )
}

export default Register
