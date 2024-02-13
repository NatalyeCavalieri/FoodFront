import { Container } from  './styles'

import { PencilSimple } from "@phosphor-icons/react"
import slideImage_1 from "../../assets/Mask group-1.png"

export function AdminCard() {
  return (
    <Container>
      <div>
        <button type="button" >
          <PencilSimple size={24}/>
        </button>
        <img src={slideImage_1} />
        <a href="#"> Salada Ravanello &gt; </a>
        <p>R$ 49,97</p>
      </div>
    </Container>
  )
}
