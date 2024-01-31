import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;
  padding-inline: 10rem;

  > input {
    width: 27.5rem;
    padding: 1.4rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    color: white;

    &::placeholder {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      text-align: center;
      
    }
  }

  > svg{
    margin-left: 1.6rem;
  }
`