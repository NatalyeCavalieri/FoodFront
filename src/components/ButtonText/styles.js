import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  font-size: 1.4rem;
  margin-top: 3.2rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  line-height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 500ms ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`