import { Container, Explorer, Circle, Search, Button } from "./styles"
import { RxHamburgerMenu } from "react-icons/rx"
import { PiReceipt } from "react-icons/pi"
import { Hexagon } from "@phosphor-icons/react"
import { IoIosSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci"
import { Input } from  '../Input'
import { OrderButton } from '../OrderButton'



export function CostumerSidebar(){
  return (
    <Container>
      <RxHamburgerMenu className="hamburger" />
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <h1>food explorer</h1>
      </Explorer>
      <Search>
        <Input
          icon={IoIosSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </Search>
      <Button>
        <OrderButton icon={PiReceipt} title="Meu pedido" number="(0)" />
        <CiLogin />
      </Button>
      <Circle>
        <PiReceipt/>
        <p>0</p>
      </Circle>
    </Container>
  )
}