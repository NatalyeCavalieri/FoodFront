import { ContainerSelect } from "./styles";

export function InputSelect(){
  return (
    <ContainerSelect>
      <label htmlFor="category">
        Categoria
      </label>
      <select name="category" id="category">
        <option value="category1">Refeição</option>
        <option value="category2">Prato principal</option>
        <option value="category3">Bebidas</option>
        <option value="category4">Sobremesa</option>
      </select>
    </ContainerSelect>
  )
}