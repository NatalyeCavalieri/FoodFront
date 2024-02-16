import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
     

    button {
      background-color: transparent;
      color: white;
      display: flex;
      > svg {
        font-size: 2rem;
         @media (min-width: ${BREAKPOINTS.L}) {
        font-size: 2.5rem;
    }
      }
    }

    span {
      @media (min-width: ${BREAKPOINTS.L}) {
        font-size: 2rem;
    }
  }
}
`
