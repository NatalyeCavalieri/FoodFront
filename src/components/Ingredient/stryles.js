import styled from "styled-components";
import {BREAKPOINTS} from '../../styles/breakPoints'

export const Container = styled.div`
width: 100%;
display: grid;


`

export const Tags = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 2.4rem;
margin-top: 2.4rem;
margin-bottom: 4.8rem;
@media (min-width: ${BREAKPOINTS.L}) {
 display: flex;
}

`

export const Tag = styled.div`
background-color: ${({theme})=> theme.COLORS.DARK_1000};
padding: 0.4rem 0.8rem;
border-radius: 5px;


p{
  color: ${({theme})=> theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-family: ${({theme}) => theme.FONTS.POPPINS};
  line-height: 2.4rem;
  font-weight: 500;
}
`