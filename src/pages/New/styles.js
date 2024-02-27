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
  width: 36.4rem;
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
  }
`

export const Form = styled.form`
  width: 100%;
  height: max-content;
`


export const InputRead = styled.div`
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  color: white;
  border: none;
  height: 3.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem 1rem 1.2rem;
  width: 12rem;

  div {
    display: flex;
    gap: 12px;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
`

export const Ingredients = styled.div`
  .inputs {
    display: flex;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 8px;
    margin-top: 1.6rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    padding: 1.2rem 0.8rem;
    white-space: nowrap;
  }

 > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    margin-top: 2.4rem;
  }
`
