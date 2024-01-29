import styled from "styled-components";


export const Container = styled.div`
margin-inline: 5.0rem
`

export const Content = styled.div`
  p {
    margin-top: 7.2rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  :nth-child(4) {
    margin-top: 3.2rem;
  }
`

export const Explorer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 15rem;
  h1{
    font-family: ${({theme})=> theme.FONTS.ROBOTO};
    font-size: 3.7rem;
  }
  
`