import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.L}) {
    display: flex;
    flex-direction: row;
    gap: 3.6rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${BREAKPOINTS.L}) {
    align-items: flex-start;
  }
`

export const MainContainer = styled.div`
  padding-inline: 5.6rem;
  margin-bottom: 3.3rem;
  flex: 1;

  h1 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    text-align: center;
    @media (max-width: ${BREAKPOINTS.MD}) {
      font-size: 2.7rem;
    }
  }

  p {
    font-size: 2.4rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 400;
    text-align: left;
    line-height: 3rem;
    @media (max-width: ${BREAKPOINTS.MD}) {
      font-size: 1.6rem;
    }
  }
`

export const ImageContainer = styled.div`
  img {
    width: 26rem;
    height: 26rem;
  }
`

export const ButtonReturn = styled.div`
  margin-left: 2.2rem;
  display: flex;
  align-items: center;

  margin-top: 2.4rem;
  transition: filter 400ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: bold;
    line-height: 3.3rem;
  }
`

export const Order = styled.div`
  display: flex;
  gap: 3.3rem;
`
