import styled from "styled-components"

export const IngredientsType = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: white;
  border: none;
  height: 3.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  padding: 1rem 1.2rem 1rem 1.2rem;
  width: 12rem;

  input {
    background-color: transparent;
    max-inline-size: 78%;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
  }

  div {
    display: flex;
    max-width: 100%;
    gap: 0.4rem;
  }

  svg{
    cursor: pointer;
    color:${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
