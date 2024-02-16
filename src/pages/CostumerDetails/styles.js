import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakPoints";



export const Container = styled.div`
border: 1px solid red;



h1{
  color: white;
}

img{
height: 26.4rem;
width: 26.4rem;
}
`


export const Main = styled.div`
border: 1px solid yellow;
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: ${BREAKPOINTS.L}) {
display: flex;
flex-direction: row; 
gap: 4.8rem;
}
`

export const ContentContainer = styled.div`
border: 1px solid violet;
display: flex;
flex-direction: column;
@media (min-width: ${BREAKPOINTS.L}) {
align-items: flex-start;
}

`

export const MainContainer = styled.div`
border: 2px solid green;
padding-inline: 5.6rem;


h1{
  font-size: 2.7rem;
  font-family: ${({theme})=> theme.FONTS.POPPINS};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-weight: 500;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  text-align: center;
}

p{
  font-size: 1.6rem;
  font-family: ${({theme})=> theme.FONTS.POPPINS};
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-weight: 400;
  text-align: center;
  line-height: 2.2rem;
}

`
export const ImageContainer = styled.div`
img{
margin-inline: 2.6rem;
}
width: max-content;
`
export const ButtonReturn = styled.div`
display: flex;
align-items: center;

margin-top: 2.4rem;
transition: filter 400ms ease-in-out;



&:hover{
  filter: brightness(0.8);
}

svg{
  cursor: pointer;
}


>button{
  background-color: transparent;
  border: none;
  color: ${({theme})=> theme.COLORS.LIGHT_300};
  font-size: 1.8rem;
  font-family: ${({theme}) => theme.FONTS.POPPINS};
  font-weight: bold;
  line-height: 3.3rem;
}
`