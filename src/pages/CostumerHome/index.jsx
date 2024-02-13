import { Container } from "./styles"

import { CostumerSidebar } from "../../components/CostumerSidebar"
import { Sections } from "../../components/Sections"
import { CostumerSlides } from "../../components/CostumerSlides"
import { Footer } from "../../components/Footer"

export function CostumerHome() {
  return (
    <Container>
      <CostumerSidebar />
      <Sections />
      <CostumerSlides />
      <CostumerSlides />
      <CostumerSlides />
      <Footer />
    </Container>
  )
}
