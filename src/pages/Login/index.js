import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LoginImg from '../../assets/login/burguers.png'
import Logo from '../../assets/login/codeburguer logo.svg'
import ContainerButton from '../../components/Button/index'
import { ApiService } from '../../services/apiService'
import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
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

  const onSubmit = async clientData => {
    const loadingToastId = toast.loading('Carregando as informações...', {
      autoClose: false
    })

    try {
      const { status } = await ApiService.post(
        'sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 200) {
        toast.update(loadingToastId, {
          render: 'Usuário logado com sucesso!',
          type: 'success',
          autoClose: true,
          isLoading: false
        })
      } else if (status === 401) {
        toast.update(loadingToastId, {
          render: 'Verifique o email e senha!',
          type: 'error',
          autoClose: true,
          isLoading: false
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.update(loadingToastId, {
        render: 'Erro Inesperado! Tente novamente',
        type: 'error',
        autoClose: true,
        isLoading: false
      })
    }
  }

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

            <ContainerButton $type="submit">Login</ContainerButton>
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
