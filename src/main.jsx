import React from "react"
import ReactDOM from "react-dom/client"
import {ThemeProvider } from "styled-components"
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import { Index } from "./pages/Details"
import { SignIn } from './pages/SignIn'
import { SignUp } from "./pages/SignUp"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)
