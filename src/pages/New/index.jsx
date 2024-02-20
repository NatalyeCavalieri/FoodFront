import { ButtonReturn, Container, Content, Form, InputContext } from "./styles";
import { AdminSidebar} from './../../components/AdminSidebar'
import { IoIosArrowBack } from "react-icons/io"
import { FiUpload } from "react-icons/fi"


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
          <label htmlFor="arquivo">
            <FiUpload size={24} />
            Selecione imagem
          </label>
          <input type="file" id="arquivo" />
        </InputContext>
      </Form>
    </Content>
  </Container>
)
}