import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  justify-content: space-around;
  position: relative;

  h1 {
    font-size: 2rem;
  }
  svg {
    font-size: 2.4rem;
  }
  :nth-child(3) {
    font-size: 3.2rem;
  }
`

export const Explorer = styled.span`
display: flex;
gap: .8rem;
`

export const Circle = styled.circle`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  border-radius: 99rem;
  position: relative;
  left: -50px;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;

 > p {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

