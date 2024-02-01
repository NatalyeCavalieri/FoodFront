import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  justify-content: space-around;
  @media (min-width: ${BREAKPOINTS.MD}) {
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
  }

  svg {
    font-size: 2.4rem;
  }

  .hamburger {
    @media (min-width: ${BREAKPOINTS.MD}) {
      margin-right: 10rem;
    }

    @media (min-width: ${BREAKPOINTS.LG}) {
      display: none;
    }
  }
`

export const Explorer = styled.span`
  display: flex;

  gap: 0.8rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    @media (min-width: ${BREAKPOINTS.LG}) {
      display: block;
      margin-right: 3.2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
    display: flex;
    justify-content: end;
  }

  h1{
    white-space:nowrap; 
  }
`

export const Search = styled.div`
  @media (max-width: ${BREAKPOINTS.L}) {
    display: none;
  }
`

export const Button = styled.div`
  display: flex;
  height: 4.5rem;
  align-items: center;
  gap: 3.2rem;
  margin-left: 3.2rem;

  svg{
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`
