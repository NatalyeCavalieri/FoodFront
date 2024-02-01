import { Container, Section } from "./styles"
import MacaronsImage from '../../assets/macarons.svg'

import { CostumerSidebar } from "../../components/CostumerSidebar"



export function CostumerHome(){
  return (
    <Container>
      <CostumerSidebar />
      <Section>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          <img src={MacaronsImage} alt="macarons image" />
        </div>
      </Section>
    </Container>
  )
}