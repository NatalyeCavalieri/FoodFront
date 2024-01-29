import { Container } from './styles.js'
import { Button } from '../../components/Button'

export function Index() {
  return (
    <Container>
      <Button title="Excluir" />
      <Button title="Incluir" disabled />
    </Container>
  )
}