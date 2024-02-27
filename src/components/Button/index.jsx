import { Container } from "./styles"

export function Button({
  icon: Icon,
  title,
  type = "button",
  background,
  ...rest
}) {
  return (
    <Container type={type} background={background} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}
