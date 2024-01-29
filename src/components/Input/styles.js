import styled from "styled-components";


export const Container = styled.div`
  input {
    width: 100%;
    background: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    padding: 1.6rem 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    }
  }
`