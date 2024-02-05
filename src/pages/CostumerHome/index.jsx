import { Container } from "./styles"

import { CostumerSidebar } from "../../components/CostumerSidebar"
import { Sections } from "../../components/Sections"

export function CostumerHome() {
  return (
    <Container>
      <CostumerSidebar />
      <Sections />
    </Container>
  )
}
