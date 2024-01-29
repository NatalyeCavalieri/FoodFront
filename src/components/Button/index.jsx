import { Container } from "./styles";


export function IncludeButton({title, ...rest}){
  return(
    <Container 
    type="button"
    {...rest}
    >
      {title}
    </Container>
  )
}