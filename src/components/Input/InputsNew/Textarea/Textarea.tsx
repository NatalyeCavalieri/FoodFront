import { Container } from "./styles";


export function Textarea(){
  return (
    <Container>
      <label>Descrição</label>
      <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
    </Container>
  )
}