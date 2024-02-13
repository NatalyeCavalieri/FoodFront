import styled from "styled-components"

import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  margin-left: 2.4rem;
  margin-right: 1rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.COLORS.POPPINS};
    font-weight: 400;
  }

  img {
    height: 9rem;
    width: 9rem;
  }
`

export const SlideControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-bottom: 1rem;
  margin-top: 4rem;
  cursor: pointer;

  .swiper-pagination {
    margin-bottom: 3rem;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }

  .swiper-pagination-bullet-active {
    background-color: gray;
  }
`

