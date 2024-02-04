import { Container, Section } from "./styles"
import MacaronsImage from '../../assets/macarons.svg'

import { CostumerSidebar } from "../../components/CostumerSidebar"



export function CostumerHome(){
  return (
    <Container>
      <CostumerSidebar />
      <Section>
        <div className="section">
          <img src={MacaronsImage} alt="macarons image" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </Section>
    </Container>
  )
}