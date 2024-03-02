import { ButtonReturn, Container, Content, Form, Ingredients, InputRead, Main } from "./styles";
import { AdminSidebar} from './../../components/AdminSidebar'
import { IoIosArrowBack, IoIosClose  } from "react-icons/io"
import { BsPlus } from "react-icons/bs"
import { InputIngredient } from "../../components/Input/InputsNew/InputIngredient";
import { InputText } from "../../components/Input/InputsNew/InputText/InputText";
import { InputFile } from "../../components/Input/InputsNew/InputFile/InputFile";
import { InputSelect } from "../../components/Input/InputsNew/InputSelect/InputSelect";
import { Textarea } from "../../components/Input/InputsNew/Textarea/Textarea";
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { NavLink } from "react-router-dom";

export function New(){
return (
  <Container>
    <AdminSidebar />
    <Main>
      <Content>
        <NavLink to="/adminHome">
          <ButtonReturn>
            <IoIosArrowBack size={24} />
            <button>Voltar</button>
          </ButtonReturn>
        </NavLink>
        <h1> Adicionar prato </h1>

        <Form>
          <div className="firstRowInput">
            <InputFile />
            <InputText
              placeholder="Ex.: Salada Ceasar"
              type="text"
              title="Nome"
            />
            <InputSelect />
          </div>
          <div className="ingredient-price">
            <Ingredients>
              <p>Ingredientes</p>
              <div className="inputs">
                <InputRead>
                  <div>
                    Pão Naan
                    <IoIosClose size={20} />
                  </div>
                </InputRead>
                <InputIngredient icon={BsPlus} placeholder="Adicionar" />
              </div>
            </Ingredients>
            <InputText placeholder="R$ 00,00" type="text" title="Preço" />
          </div>
          <Textarea />
          <Button title="Salvar alterações" type="submit" background="true" />
        </Form>
      </Content>
    </Main>
    <Footer />
  </Container>
)
}