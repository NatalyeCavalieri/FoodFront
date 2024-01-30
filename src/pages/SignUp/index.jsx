import { Container, Content, Explorer, Form } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Hexagon } from "@phosphor-icons/react"

export function SignUp() {
  return (
    <Container>
      <Content>
        <Explorer>
          <Hexagon size={43} color="#065E7C" weight="fill" />
          <h1>food explorer</h1>
        </Explorer>
        <Form>
          <span>Crie sua conta</span>
          <p>Seu nome</p>
          <Input placeholder="Exemplo: Maria da Silva" />
          <p>Email</p>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
          <p>Senha</p>
          <Input placeholder="No mínimo 6 caracteres" />

          <Button title="Criar uma conta" />
          <ButtonText title="Já tenho uma conta" />
        </Form>
      </Content>
    </Container>
  )
}
