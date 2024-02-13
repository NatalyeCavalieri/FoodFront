import { Container, Explorer } from "./styles"
import { Hexagon } from "@phosphor-icons/react"

export function Footer() {
  return (
    <Container>
      <Explorer>
        <Hexagon size={18} color="rgba(77,88,94,1)" weight="fill" />
        <h1>food explorer</h1>
      </Explorer>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
