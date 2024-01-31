import { Container, Explorer, Input } from './styles'
import { Hexagon } from "@phosphor-icons/react"
import { IoIosSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci"

import { Button } from '../Button'

export function AdminNavBarDesk(){
  return (
    <Container>
      <Explorer>
        <Hexagon size={24} color="#065E7C" weight="fill" />
        <h1>food explorer</h1>
        <p>admin</p>
        <IoIosSearch />
      </Explorer>

      <Button title="Novo prato" />
      <CiLogin />
    </Container>
  )
}