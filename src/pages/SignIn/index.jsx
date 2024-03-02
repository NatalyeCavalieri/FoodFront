import { Container, Content, Explorer, Form} from "./styles"
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"
import { Hexagon } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"


export function SignIn(){
  return (
    <Container>
      <Content>
        <Explorer>
          <Hexagon size={43} color="#065E7C" weight="fill" />
          <h1>food explorer</h1>
        </Explorer>
        <Form>
          <span>Faça Login</span>
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
          <p>Senha</p>
          <Input placeholder="No mínimo 6 caracteres" />
            <Button title="Entrar" />
          <NavLink to="/signup">
            <ButtonText title="Criar uma conta" />
          </NavLink>
        </Form>
      </Content>
    </Container>
  )
}