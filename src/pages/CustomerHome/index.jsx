import { Container } from "./styles"

import { CustomerSidebar } from "../../components/CustomerSidebar"
import { Sections } from "../../components/Sections"
import { CustomerSlides } from "../../components/CustomerSlides"
import { Footer } from "../../components/Footer"

export function CustomerHome() {
  return (
    <Container>
      <CustomerSidebar />
      <Sections />
      <CustomerSlides />
      <CustomerSlides />
      <CustomerSlides />
      <Footer />
    </Container>
  )
}
