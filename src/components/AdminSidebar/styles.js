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

  .icon {
    @media (min-width: ${BREAKPOINTS.MD}){
      margin-right: 10rem;
    }
  }
`

export const Explorer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;


  p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.2rem;
  }
`

