import React from "react"
import ReactDOM from "react-dom/client"
import { Index } from "./pages/Details"
import {ThemeProvider } from "styled-components"
import theme from './styles/theme'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Index />
    </ThemeProvider>
  </React.StrictMode>
)
