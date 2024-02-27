import styled from "styled-components"

export const ContainerFile = styled.div`
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    padding: 1.6rem;
  }

  input[type=file]{
    display: none;
  }

  label {
    padding: 1.2rem 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    > svg {
      margin-right: 0.8rem;
    }
  }
`
