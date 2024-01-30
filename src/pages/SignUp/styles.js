import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  margin-inline: 5rem;
`

export const Content = styled.div`
  p {
    margin-top: 7.2rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    color: ${({theme})=> theme.COLORS.LIGHT_400};
    @media (min-width: ${BREAKPOINTS.LG}) {
      margin-top: 0;
    }
  }

  :nth-child(4) {
    margin-top: 3.2rem;
  }
  :nth-child(6) {
    margin-top: 3.2rem;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const Explorer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 15rem;
  white-space: nowrap;

  @media (min-width: ${BREAKPOINTS.LG}) {
    margin-top: 0;
  }

  h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 3.7rem;
    
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 3rem;
    }
  }
`

export const Form = styled.div`
  @media (min-width: ${BREAKPOINTS.LG}) {
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    min-width: 47rem;
    margin-bottom: 9rem;
    margin-top: 9rem;
  }
  span {
    display: none;
    @media (min-width: ${BREAKPOINTS.LG}) {
      display: flex;
      margin-bottom: 3.2rem;
      justify-content: center;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
      line-height: 4.4rem;
    }
  }
`
