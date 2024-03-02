import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakPoints"

export const Container = styled.div`
  width: 21rem;
  height: 26rem;
  background-color: black;
  position: relative;
  border-radius: 1rem;
  @media (min-width: ${BREAKPOINTS.L}) {
      width: 30rem;
      height: 42rem;
      padding-inline: 3.4rem;
    }


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    line-height: 2.4rem;
    white-space: nowrap;

    :hover{
       color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
     @media (min-width: ${BREAKPOINTS.L}) {
      font-size: 2.4rem;
    }
  }

  button {
    margin-bottom: 2rem;
    cursor: pointer;
    > svg {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
   }
  }
`

export const ImageContainer = styled.div`
img{

  @media (min-width: ${BREAKPOINTS.L}) {
      height: 17rem;
      width: 17rem;
      margin-bottom: 1.5rem;
      margin-top: 3rem;
    }
  
}
`

export const DescriptionContainer= styled.span`
@media (max-width: ${BREAKPOINTS.MD}) {
      display: none;

    }

 @media (min-width: ${BREAKPOINTS.L}) {
      display: flex;
      text-align: center;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      line-height: 2.2rem;
      font-size: 1.4rem;

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