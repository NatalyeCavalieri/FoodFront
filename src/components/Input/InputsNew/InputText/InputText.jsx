import { Container } from "./styles";


export function InputText({placeholder, title}){
return (
  <Container>
    <label>{title}</label>
    <input type="text" placeholder={placeholder} />
  </Container>
)
}