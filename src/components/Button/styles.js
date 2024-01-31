import styled from "styled-components";

export const Container = styled.button`
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  margin-top: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`