import { Container, Explorer, Circle } from "./styles"
import { RxHamburgerMenu } from "react-icons/rx"
import { PiReceipt } from "react-icons/pi"

import { Hexagon } from "@phosphor-icons/react"



export function CostumerSideBar(){
  return (
    <Container>
      <RxHamburgerMenu />
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <h1>food explorer</h1>
      </Explorer>
      <PiReceipt />
      <Circle>
        <p>0</p>
      </Circle>
    </Container>
  )
}