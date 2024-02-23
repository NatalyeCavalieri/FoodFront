import { ButtonReturn, Container, Content, Form, InputContext } from "./styles";
import { AdminSidebar} from './../../components/AdminSidebar'
import { IoIosArrowBack, IoIosClose  } from "react-icons/io"
import { FiUpload } from "react-icons/fi"
import { BsPlus } from "react-icons/bs"
import { InputIngredient } from "../../components/InputIngradient";


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
        <InputContext>
          <p>Imagem do prato</p>
          <label htmlFor="file" className="label-file">
            <FiUpload size={24} />
            Selecione imagem
          </label>
          <input type="file" id="file" />
        </InputContext>
        <InputContext>
          <label className="label-text">Nome</label>
          <input type="text" placeholder="Ex.: Salada Ceasar" />
        </InputContext>
        <InputContext>
          <label htmlFor="category" className="label-text">
            Categoria
          </label>
          <select name="category" id="category">
            <option value="category1">Refeição</option>
            <option value="category2">Prato principal</option>
            <option value="category3">Bebidas</option>
            <option value="category4">Sobremesa</option>
          </select>
        </InputContext>
        <InputContext>
        <label className="label-text">Ingredientes</label>
          <InputIngredient icon={BsPlus} placeholder="Adicionar" />
        </InputContext>
      </Form>
    </Content>
  </Container>
)
}