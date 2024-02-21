import styled from "styled-components"

export const Container = styled.div``

export const ButtonReturn = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  margin-bottom: 3.5rem;
  transition: filter 400ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    cursor: pointer;
  }

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500;
    line-height: 3.3rem;
  }
`

export const Content = styled.div`
  border: 1px solid yellow;
  margin-inline: 3.2rem;
  height: 100vh;
  width: 36.4rem;

  h1 {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
  }
`

export const Form = styled.form`
  width: 100%;
  height: max-content;

  input[type="file"] {
    display: none;
  }

  .label-file {
    padding: 1.2rem 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    > svg {
      margin-right: 0.8rem;
    }
  }
`

export const InputContext = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input[type="text"] {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    padding: 1.2rem 3.2rem;
  }
  .label-text {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    margin-top: 2.4rem;
  }

  select {
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    padding: 1.2rem 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    

    &:focus{
      outline: none;
    }
  }
`
