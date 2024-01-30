import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
font-size: 62.5%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
}

body, input, button, textarea{
    outline: none; 
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1{
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
}


a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  border: none;
}

input, textArea{
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
}
`
