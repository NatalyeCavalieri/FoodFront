import { Section } from './styles'
import MacaronsImage from "../../assets/macarons.svg"
import MaronsImageDesktop from "../../assets/macaronsDesk.svg"

export function Sections(){
  return(
    
 <Section>
   <div className="section">
     <img className="imageMobile" src={MacaronsImage} />
     <img className="imageDesktop" src={MaronsImageDesktop} />
     <div>
       <h1>Sabores inigualáveis</h1>
       <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
     </div>
   </div>
 </Section>
  )
}