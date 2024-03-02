import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;
  padding-inline: 0;
  margin-bottom: 3rem;

  > input {
    width: 27.5rem;
    padding: 1.4rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    color: white;

    &::placeholder {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      text-align: start;
       @media (max-width: ${BREAKPOINTS.SM}) {
        font-size: 1.2rem;
  }
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
