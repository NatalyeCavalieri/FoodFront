import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakPoints"


export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  svg {
    font-size: 2.4rem;
  }

  .hamburger {
    @media (min-width: ${BREAKPOINTS.LG}) {
      display: none;
    }
  }

`

export const Explorer = styled.span`
display: flex;
gap: .8rem;
`

export const Circle = styled.div`

  @media (min-width: ${BREAKPOINTS.LG}) {
    display: none;
  }

  > p {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 2rem;
    width: 2rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 99rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 3.375rem;
    top: 5rem;

    @media (min-width: ${BREAKPOINTS.X}) {
      right: 4.75rem;
    }

    @media (min-width: ${BREAKPOINTS.MD}) {
      right: 11rem;
    }
  }

  > svg {
    font-size: 3.2rem;
    position: relative;
  }
`

export const Search = styled.div`
@media (max-width: ${BREAKPOINTS.MD}) {
  display: none;
}
`

export const Button = styled.div`
display: flex;
height: 5.6rem;
align-items: center;
gap: 3.2rem;
  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`