import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Section = styled.div`
  .section {
    height: 12rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT};
    border-radius: 0.29rem;
    margin-inline: 1.6rem;
    margin-top: 4.4rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    text-align: justify;
    margin-bottom: 8.6rem;

    @media (min-width: ${BREAKPOINTS.L}) {
      height: 26rem;
      margin-top: 17rem;
    }
    @media (min-width: ${BREAKPOINTS.XL}) {
      margin-inline: 12.4rem;
    }
  }

  .imageDesktop {
    @media (max-width: ${BREAKPOINTS.L}) {
      display: none;
    }
    height: 40rem;
    width: 63rem;
    margin-top: -14.5rem;
    margin-left: -5.5rem;
  }

  .imageMobile {
    height: 15rem;
    width: 17rem;
    margin-top: -1.5rem;
    margin-left: -2.5rem;
    @media (min-width: ${BREAKPOINTS.L}) {
      display: none;
    }
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 2.52rem;
    white-space: nowrap;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 1.4rem;
    }
    @media (min-width: ${BREAKPOINTS.L}) {
      font-size: 4rem;
      line-height: 5.6rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 1.68rem;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 1rem;
      text-align: center;
      line-height: 1.6rem;
    }

    @media (min-width: ${BREAKPOINTS.L}) {
      font-size: 1.6rem;
    }
  }
`
