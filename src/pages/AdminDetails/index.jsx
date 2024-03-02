import { TagsIngredient } from "../../components/Ingredient";
import { ButtonReturn, Container, ContentContainer, ImageContainer, Main, MainContainer, Order } from "./styles";
import { AdminSidebar } from "../../components/AdminSidebar"
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { IoIosArrowBack } from "react-icons/io";
import slideImage_1 from "../../assets/Mask group-1.png"
import { NavLink } from "react-router-dom";


export function AdminDetails() {
  return (
    <Container>
      <AdminSidebar />

      <MainContainer>
        <NavLink to="/adminHome">
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
              <Button title="Editar prato" />
            </Order>
          </ContentContainer>
        </Main>
      </MainContainer>
      <Footer />
    </Container>
  )
}