
import { Container } from "./styles"
import { AdminSidebar } from "../../components/AdminSidebar"
import { Sections } from '../../components/Sections'
import {AdminSlides} from '../../components/AdminSlides'
import { Footer } from '../../components/Footer'



export function AdminHome (){
  return (
    <Container>
      <AdminSidebar />
      <Sections />
      <AdminSlides />
      <AdminSlides />
      <AdminSlides />
      <Footer />
    </Container>
  ) 
}