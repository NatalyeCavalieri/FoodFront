import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints" 

export const Container = styled.div`
  width: 21rem;
  height: 28rem;
  background-color: black;
  position: relative;
  border-radius: 1rem;
  @media (min-width: ${BREAKPOINTS.L}) {
      width: 25rem;
      height: 42rem;
    }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  .counter-button{
    @media (min-width: ${BREAKPOINTS.L}) {
    display: flex;
    flex-direction: row;
    }
   
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    line-height: 2.4rem;

    @media (min-width: ${BREAKPOINTS.L}) {
      font-size: 2.4rem;
    }
  }

  .fullHeart,
  .emptyHeart {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  button {
    .fullHeart {
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }

  }
`


export const ImageContainer = styled.div`
img{

  @media (min-width: ${BREAKPOINTS.L}) {
      height: 17rem;
      width: 17rem;
      margin-bottom: 1.5rem;
    }
  
}
`


export const DescriptionContainer= styled.p`
display: none;
 @media (min-width: ${BREAKPOINTS.L}) {
      display: flex;
      font-size: 1.4rem;
      text-align: center;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      line-height: 2.2rem;

    }
`

export const PriceContainer = styled.span`
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

     @media (min-width: ${BREAKPOINTS.L}) {
      font-size: 3.2rem;
     }
`