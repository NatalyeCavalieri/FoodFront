import { Container, Explorer, Search } from "./styles"
import { Hexagon } from "@phosphor-icons/react"
import { IoIosSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci"

import { Button } from '../Button'
import { Input } from '../Input'

export function AdminNavBar(){
  return (
    <Container>
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <h1>food explorer</h1>
        <p>admin</p>
      </Explorer>
      <Search>
      <Input placeholder="Pesquise o nome do prato" icon={IoIosSearch} />

      </Search>
      <Button title="Novo prato" />
      <CiLogin />
    </Container>
  )
}