import { TagsIngredient } from "../../components/Ingredient";
import { ButtonReturn, Container, ContentContainer, ImageContainer, Main, MainContainer, Order } from "./styles";
import { CostumerSidebar } from '../../components/CostumerSidebar'
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { IoIosArrowBack } from "react-icons/io";
import { PiReceipt } from "react-icons/pi"
import slideImage_1 from "../../assets/Mask group-1.png"


export function CostumerDetails(){
  return(
    <Container>
      <CostumerSidebar/>

      <MainContainer>
      <ButtonReturn>
        <IoIosArrowBack size={24}/>
        <button>Voltar</button>
      </ButtonReturn>
        <Main>
        <ImageContainer>
      <img src={slideImage_1}  />
      </ImageContainer>
      <ContentContainer>
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
      <TagsIngredient/>
      <Order>
      <Counter/>
      <Button title="incluir ∙ R$ 25,00" icon={PiReceipt}/>
      </Order>
      </ContentContainer>
      </Main>
      </MainContainer>
    <Footer/>
    </Container>
  )
}