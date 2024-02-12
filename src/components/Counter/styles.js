import styled from "styled-components"

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
      }
    }
  }
`
