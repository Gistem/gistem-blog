import styled from "styled-components";
export const FooterElement = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.dark};
  font-weight: bold;
  font-size: 1.3em;
`

