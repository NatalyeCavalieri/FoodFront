import React from "react"
import ReactDOM from "react-dom/client"
import { Index } from "./pages/Details"
import {ThemeProvider } from "styled-components"
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  </React.StrictMode>
)
