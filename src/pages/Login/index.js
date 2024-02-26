import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LoginImg from '../../assets/login/burguers.png'
import Logo from '../../assets/login/codeburguer logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import ApiService from '../../services/apiService'
import {
  Container,
  ContainerItens,
  ErrorMessage,
  FormDiv,
  Input,
  Label,
  LoginImage,
  SignUpLink
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

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

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
      const { status, data } = await ApiService.post(
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
        putUserData(data)
        setInterval(() => {
          history.push('/')
          history.go(0)
        }, 1000)
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

            <Button $type="submit">Login</Button>
          </form>
          <SignUpLink>
            <Link style={{ color: 'white' }} to="/cadastro">
              Cadastre-se
            </Link>
          </SignUpLink>
        </FormDiv>
      </ContainerItens>
    </Container>
  )
}
