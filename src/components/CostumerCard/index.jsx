import { Container } from './styles'
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
import { useState } from 'react'
import { Button } from "../Button"
import { Counter } from '../Counter'

import slideImage_1 from "../../assets/Mask group-1.png"


export function CostumerCard(){
   const [emptyHeart, setEmptyHeart] = useState(true)

   function handleToggleHeart() {
     setEmptyHeart(!emptyHeart)
   }

   return(

     <Container>
       <div>
         <button type="button" onClick={handleToggleHeart}>
           {emptyHeart ? (
             <CiHeart className='emptyHeart' size={32} />
           ) : (
             <FaHeart className="fullHeart" size={28} />
           )}
         </button>
         <img src={slideImage_1} />
         <a href="#"> Salada Ravanello &gt; </a>
         <p>R$ 49,97</p>
         <Counter/>
         <Button title="incluir" />
       </div>
       
     </Container>
   )
}