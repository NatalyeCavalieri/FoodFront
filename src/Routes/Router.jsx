import { Route, Routes } from "react-router-dom";
import { SignIn } from '../pages/SignIn'
import { SignUp } from "../pages/SignUp"
import { AdminHome } from '../pages/AdminHome'
import { CostumerHome } from "../pages/CostumerHome"
import { AdminDetails } from '../pages/AdminDetails'
import { CostumerDetails } from '../pages/CostumerDetails'
import { New } from '../pages/New'
import { Edit } from "../pages/Edit"

export function Router(){
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/adminHome" element={<AdminHome />} />
    <Route path="/costumerHome" element={<CostumerHome />} />
    <Route path="/adminDetails" element={<AdminDetails />} />
    <Route path="/costumerDetails" element={<CostumerDetails />} />
    <Route path="/new" element={<New />} />
    <Route path="/edit" element={<Edit />} />
  </Routes>
}