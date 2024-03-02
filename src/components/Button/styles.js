import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.button`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  gap: 0.5rem;

  background-color: ${({ theme, background }) =>
    background ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  transition: background-color 500ms;

  svg {
    width: 1.6rem;
    @media (min-width: ${BREAKPOINTS.L}) {
      display: none;
    }
  }

  &:hover {
    background-color: ${({ theme, background }) =>
      background ? theme.COLORS.TOMATO_300 : theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`
