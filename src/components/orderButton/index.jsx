import { Container } from './styles'

export function OrderButton({icon: Icon, title, number, ...rest}){
return (
  <Container>
    {Icon && <Icon size={20} />}
    <button
      {...rest}
      >
      { title }
      { number }
    </button>
  </Container>
)
}