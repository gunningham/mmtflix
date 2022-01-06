import styled from 'styled-components'
import { Input } from '@atoms/SearchInput/styles'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  padding-bottom: 40px;
`

export const Header = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  padding: 60px 20px 40px;

  ${Input} {
    margin-top: 20px;
  }
  
  @media (${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Input} {
      margin-top: 0px;
    }
  }
`

export const Main = styled.main`
  margin: 0 auto;
  max-width: 1080px;
  padding: 20px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.colors.secondary};
`
