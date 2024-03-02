import { TagsIngredient } from "../../components/Ingredient";
import { ButtonReturn, Container, ContentContainer, ImageContainer, Main, MainContainer, Order } from "./styles";
import { CustomerSidebar } from "../../components/CustomerSidebar"
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { IoIosArrowBack } from "react-icons/io";
import { PiReceipt } from "react-icons/pi"
import slideImage_1 from "../../assets/Mask group-1.png"
import { NavLink } from "react-router-dom";


export function CustomerDetails() {
  return (
    <Container>
      <CustomerSidebar />

      <MainContainer>
        <NavLink to="/costumerHome">
          <ButtonReturn>
            <IoIosArrowBack size={24} />
            <button>Voltar</button>
          </ButtonReturn>
        </NavLink>
        <Main>
          <ImageContainer>
            <img src={slideImage_1} />
          </ImageContainer>
          <ContentContainer>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <TagsIngredient />
            <Order>
              <Counter />
              <Button title="incluir ∙ R$ 25,00" icon={PiReceipt} />
            </Order>
          </ContentContainer>
        </Main>
      </MainContainer>
      <Footer />
    </Container>
  )
}