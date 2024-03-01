import React from "react"
import ReactDOM from "react-dom/client"
import {ThemeProvider } from "styled-components"
import theme from './styles/theme'
import GlobalStyle from './styles/global'
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes/Router"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
