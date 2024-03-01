import styled from "styled-components"
import { BREAKPOINTS } from "../../../../styles/breakPoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
   @media (min-width: ${BREAKPOINTS.L}) {
     width: 100%;
     align-items: start;
     gap: 0;
  }

  textarea {
    height: 17rem;
    padding: 1.4rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    padding: 1.6rem;
    resize: none;
      @media (min-width: ${BREAKPOINTS.L}) {
     width: 100%;
  }
  }

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    margin-top: 2.4rem;
     @media (min-width: ${BREAKPOINTS.L}) {
     width: 100%;
  }
  }
`
