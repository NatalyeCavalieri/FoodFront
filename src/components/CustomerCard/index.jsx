import { Container, DescriptionContainer, ImageContainer, PriceContainer } from './styles'
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
import { useState } from 'react'
import { Button } from "../Button"
import { Counter } from '../Counter'
import slideImage_1 from "../../assets/Mask group-1.png"
import { NavLink } from 'react-router-dom'


export function CustomerCard(){
   const [emptyHeart, setEmptyHeart] = useState(true)

   function handleToggleHeart() {
     setEmptyHeart(!emptyHeart)
   }

   return (
     <Container>
       <div>
         <button type="button" onClick={handleToggleHeart}>
           {emptyHeart ? (
             <CiHeart className="emptyHeart" size={32} />
           ) : (
             <FaHeart className="fullHeart" size={28} />
           )}
         </button>
         <ImageContainer>
           <img src={slideImage_1} />
         </ImageContainer>
         <NavLink to="/costumerDetails">
           <a href="#"> Salada Ravanello &gt; </a>
         </NavLink>
         <DescriptionContainer>
           Delicioso folheado de pêssego com folhas de hortelã.
         </DescriptionContainer>
         <PriceContainer>R$ 49,97</PriceContainer>
         <div className="counter-button">
           <Counter />
           <Button title="incluir" />
         </div>
       </div>
     </Container>
   )
}