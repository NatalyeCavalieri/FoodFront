import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  margin-left: 2.4rem;
  
  p{
    font-size: 1.8rem;
    font-family: ${({theme})=> theme.COLORS.POPPINS};
    font-weight:400;
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

  .swiper-pagination {
    margin-bottom: 3rem;
  }
`
export const Card = styled.div`
  width: 21rem;
  height: 26rem;
  background-color: black;
  position: relative;

  border-radius: 1rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    align-items: center;
    gap: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`
