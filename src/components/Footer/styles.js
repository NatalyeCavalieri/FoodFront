import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.footer`
  width: 100%;
  display: flex;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  align-items: center;
  gap: 2rem;

  @media (min-width: ${BREAKPOINTS.L}) {
    justify-content: space-between;
    padding-inline: 12rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    padding-inline: 0.5rem;
    gap: 1rem;
  }

  p {
    white-space: nowrap;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: ${({ theme }) => theme.FONTS.DM};
  }
`

export const Explorer = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  > svg {
    @media (max-width: ${BREAKPOINTS.XS}) {
      height: 1.4rem;
      width: 1.4rem;
    }
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.6rem;
    white-space: nowrap;

    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 1.2rem;
    }
  }
`
