import { FiUpload } from "react-icons/fi";
import { ContainerFile } from "./styles";

export function InputFile(){
  return (
    <ContainerFile>
      <p>Imagem do prato</p>
      <label htmlFor="file">
        <FiUpload size={24} />
        Selecione imagem
      </label>
      <input type="file" id="file" />
    </ContainerFile>
  )
}