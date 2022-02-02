import styled from 'styled-components'

export const Container = styled.div`
  max-width: 60vw;
  margin: 0 auto;
  padding: 8px 16px;
`
export const HeaderContainer = styled.div`
max-width: 60vw;
margin: 0 auto;
padding: 8px 16px;
box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.1);
`
export const HeroContainer = styled.section`
  width: 100%;
  height: 500px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`