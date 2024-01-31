import { Container, Explorer } from "./styles"
import { RxHamburgerMenu } from "react-icons/rx"


import { Hexagon } from "@phosphor-icons/react"

export function AdminSidebar() {
  return (
    <Container>
      <RxHamburgerMenu className="icon"/>
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <h1>food explorer</h1>
        <p>admin</p>
      </Explorer>
    </Container>
  )
}
