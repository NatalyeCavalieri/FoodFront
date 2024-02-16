import React from "react"
import ReactDOM from "react-dom/client"
import {ThemeProvider } from "styled-components"
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import { SignIn } from './pages/SignIn'
import { SignUp } from "./pages/SignUp"
import { CostumerHome } from './pages/CostumerHome'
import { AdminHome } from "./pages/AdminHome"
import { CostumerDetails } from "./pages/CostumerDetails"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <CostumerDetails/>
    </ThemeProvider>
  </React.StrictMode>
)
