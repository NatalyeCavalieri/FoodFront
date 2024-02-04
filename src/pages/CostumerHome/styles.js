import styled from "styled-components";
import { BREAKPOINTS } from '../../styles/breakPoints'




export const Container = styled.div`
width: 100%;
`

export const Section = styled.div`
  .section {
    width: 100%;
    height: 12rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT};
    border-radius: 0.29rem;
    margin-inline: 1.6rem;
    margin-top: 4.4rem;
    margin-left: 3rem;
    margin-right:1rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    text-align: justify;
  }

  img {
    height: 15rem;
    width: 17rem;
    margin-top: -1.5rem;
    margin-left: -2.5rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 2.52rem;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    line-height: 1.68rem;
    @media (max-width: ${BREAKPOINTS.XS}) {
      font-size: 1rem;
    }
  }
`