import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/login/codeburguer logo.svg'
import RegisterImg from '../../assets/register/burgos.png'
import { Button } from '../../components'
import ApiService from '../../services/apiService'
import {
  Container,
  ContainerItens,
  ErrorMessage,
  FormDiv,
  Input,
  Label,
  LoginLink,
  RegisterImage
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

export function Register() {
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
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.update(loadingToastId, {
          render: 'Usuário Cadastrado com Sucesso!',
          type: 'success',
          autoClose: true,
          isLoading: false
        })
      } else if (status === 409) {
        toast.update(loadingToastId, {
          render: 'Email já cadastrado!',
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

            <Button $type="submit">Register</Button>
          </form>
          <LoginLink>
            <Link style={{ color: 'white' }} to="/login">
              Login
            </Link>
          </LoginLink>
        </FormDiv>
      </ContainerItens>
    </Container>
  )
}
