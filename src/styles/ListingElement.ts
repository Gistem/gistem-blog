import styled from "styled-components";

const ListingElement = styled.div`
margin-bottom: 1.4em;
  a{
      font-size: 1.1em;
      transition: 0.5s;
      background: ${({ theme }) => theme.white};
      padding: 2px 4px;
      cursor: pointer;
      outline: solid 2px ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.dark};
  }
  a:hover{
    outline: solid 2px ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.secondary};
    opacity: 0.8;
  }
`

export default ListingElement