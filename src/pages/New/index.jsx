import { ButtonReturn, Container, Content, Form, Ingredients, InputRead } from "./styles";
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


export function New(){
return (
  <Container>
    <AdminSidebar />
    <Content>
      <ButtonReturn>
        <IoIosArrowBack size={24} />
        <button>Voltar</button>
      </ButtonReturn>
      <h1>Novo prato</h1>

      <Form>
        <InputFile />
        <InputText placeholder="Ex.: Salada Ceasar" type="text" title="Nome" />
        <InputSelect />
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
        <Textarea />
        <Button title="Salvar alterações" type="submit" background="true" />
      </Form>
    </Content>
    <Footer/>
  </Container>
)
}