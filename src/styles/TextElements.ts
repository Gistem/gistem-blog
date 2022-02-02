import styled from 'styled-components'

export const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
`

export const Title = styled.h1<{ hero?: boolean }>`
  color: ${({ theme, hero }) => (hero ? theme.secondary : theme.dark)};
  font-size: ${({ hero }) => (hero ? '3.5em' : '2em')};
  line-height: ${({ hero }) => (hero ? 1 : 1.6)};
  margin-bottom: ${({ hero }) => (hero ? '8px' : '24px')};
  border-bottom: solid ${({ hero }) => (hero ? '3.5px' : '0px')} ${({ theme, hero }) => (hero ? theme.secondary : theme.dark)};
  border-top: solid ${({ hero }) => (hero ? '0px' : '2px')} ${({ theme, hero }) => (hero ? theme.secondary : theme.dark)};
  text-shadow: 0px 0.5px rgba(0, 0, 0, 1);
`

export const Paragraph = styled.p<{ light?: boolean }>`
  color: ${({ theme, light }) => (light ? theme.white : theme.dark)};
  font-size: 1.1em;
  margin-bottom: 1.5rem;
`