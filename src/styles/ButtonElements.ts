import styled from "styled-components";

export const ButtonElement = styled.button`
  border: none;
  background: ${({ theme }) => theme.secondary};
  padding: 10px 20px;
  text-transform: uppercase;
  curson: pointer;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  &:hover {
      opacity: 0.8;
  }
`