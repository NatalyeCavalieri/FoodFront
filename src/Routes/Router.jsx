import { Route, Routes } from "react-router-dom";
import { SignIn } from '../pages/SignIn'
import { SignUp } from "../pages/SignUp"
import { AdminHome } from '../pages/AdminHome'
import { CustomerHome } from "../pages/CustomerHome"
import { AdminDetails } from '../pages/AdminDetails'
import { CustomerDetails } from "../pages/CustomerDetails"
import { New } from '../pages/New'
import { Edit } from "../pages/Edit"

export function Router(){
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/customerHome" element={<CustomerHome />} />
      <Route path="/adminDetails" element={<AdminDetails />} />
      <Route path="/customerDetails" element={<CustomerDetails />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  )
}