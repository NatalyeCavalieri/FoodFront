import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakPoints";

export const ContainerSelect= styled.div`
display: flex;
flex-direction: column;
   @media (min-width: ${BREAKPOINTS.L}) {
      flex:1;
  }

label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    margin-top: 2.4rem;
      @media (min-width: ${BREAKPOINTS.L}) {
      margin-top: 0;
  }
  }

  select {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    &:focus {
      outline: none;
    }
  }
`