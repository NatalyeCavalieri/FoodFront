import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakPoints";

export const Container = styled.div`
  input {
    width: 100%;
    background: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    padding: 1.6rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
    @media (min-width: ${BREAKPOINTS.LG}) {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }
  }
`