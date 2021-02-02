import React, { FormEvent, InputHTMLAttributes, useRef } from 'react'
import api from '../../../infra/services/Api'
import { ButtonSend } from '../../components/Buttons.Styled'
import { InputLogin } from '../../components/Inputs.Styled'
import { BlockLogin, Container, ImageLogin, LoginForm } from './styles'

const Login: React.FC = () => {

  const userRef = useRef<FormEvent | any>()
  const passRef = useRef<FormEvent | any>()

  const Login: any = async (evt: FormEvent) => {
    evt.preventDefault()

    try {
      
      const { data } = await api.post('/login')

      console.log(data)

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <Container>
      <BlockLogin>
        <ImageLogin>
        </ImageLogin>


      <LoginForm onSubmit={ Login } >
        <label htmlFor="username">Usuário</label>
        <InputLogin id="username" type="text" ref={userRef} />

        <label htmlFor="password">Senha</label>
        <InputLogin id="password" type="password" ref={passRef} />

        <ButtonSend>
          Autenticar
        </ButtonSend>
      </LoginForm>

      </BlockLogin>
    </Container>
  )
}

export default Login