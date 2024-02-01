import { Container, Explorer, Search, Button } from "./styles"
import { Input } from  '../Input'
import { OrderButton } from "../OrderButton"

import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosSearch } from "react-icons/io"
import { CiLogin } from "react-icons/ci"


import { Hexagon } from "@phosphor-icons/react"

export function AdminSidebar() {
  return (
    <Container>
      <RxHamburgerMenu className="hamburger" />
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <div>
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
      </Explorer>
      <Search>
        <Input
          icon={IoIosSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </Search>
      <Button>
        <OrderButton title="Novo prato"  />
        <CiLogin />
      </Button>
    </Container>
  )
}
