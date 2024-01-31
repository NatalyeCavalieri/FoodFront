import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakPoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;



  input {
    width: 58rem;
    padding: 1.2rem 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    @media (min-width: ${BREAKPOINTS.LG}) {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      text-align: center;
    }
  }
`