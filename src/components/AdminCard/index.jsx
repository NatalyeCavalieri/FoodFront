import { Container, DescriptionContainer, ImageContainer, PriceContainer } from  './styles'

import { PencilSimple } from "@phosphor-icons/react"
import slideImage_1 from "../../assets/Mask group-1.png"

export function AdminCard() {
  return (
    <Container>
      <div>
        <button type="button" >
          <PencilSimple size={26}/>
        </button>
          <ImageContainer>
         <img src={slideImage_1} />
         </ImageContainer>
        <a href="#"> Salada Ravanello &gt; </a>
        <DescriptionContainer>Delicioso folheado de pêssego com folhas de hortelã.</DescriptionContainer>
        <PriceContainer>R$ 49,97</PriceContainer>
        
      </div>
    </Container>
  )
}
