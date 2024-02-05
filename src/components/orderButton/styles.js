import styled from "styled-components";


export const Container = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 10px;
  }
  
  > button {
    width: 20rem;
    height: 4.8rem;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    color: white;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    border-radius: 10px;

    transition: background-color 700ms;
  }

  > svg {
    margin-left: 1.6rem;
  }
`