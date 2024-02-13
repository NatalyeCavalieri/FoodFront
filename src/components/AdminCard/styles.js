import styled from "styled-components"

export const Container = styled.div`
  width: 21rem;
  height: 26rem;
  background-color: black;
  position: relative;
  border-radius: 1rem;
  
  img{
    margin-top: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
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
