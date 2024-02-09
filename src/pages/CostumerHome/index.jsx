import { Container } from "./styles"

import { CostumerSidebar } from "../../components/CostumerSidebar"
import { Sections } from "../../components/Sections"
import { CostumerCards } from "../../components/CostumerCards"

export function CostumerHome() {
  return (
    <Container>
      <CostumerSidebar />
      <Sections />
      <CostumerCards />
      <CostumerCards />
      <CostumerCards />
    </Container>
  )
}
