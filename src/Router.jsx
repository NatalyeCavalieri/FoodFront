import { Routes, Route } from "react-router-dom"
import { CostumerHome } from './pages/CostumerHome'
import { CostumerDetails } from './pages/CostumerDetails'

export function Router(){
  return(
    <Routes>
      <Route path="/home" element={CostumerHome} />
      <Route path="/details" element={CostumerDetails} />
    </Routes>
  )
}