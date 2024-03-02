import { Container, DescriptionContainer, ImageContainer, PriceContainer } from  './styles'

import { PencilSimple } from "@phosphor-icons/react"
import slideImage_1 from "../../assets/Mask group-1.png"
import { NavLink } from 'react-router-dom'

export function AdminCard() {
  return (
    <Container>
      <div>
        <NavLink to="/edit">
          <button type="button">
            <PencilSimple size={26} />
          </button>
        </NavLink>
        <ImageContainer>
          <img src={slideImage_1} />
        </ImageContainer>
        <NavLink to="/adminDetails">
          <a href="#"> Salada Ravanello &gt; </a>
        </NavLink>
        <DescriptionContainer>
          Delicioso folheado de pêssego com folhas de hortelã.
        </DescriptionContainer>
        <PriceContainer>R$ 49,97</PriceContainer>
      </div>
    </Container>
  )
}
