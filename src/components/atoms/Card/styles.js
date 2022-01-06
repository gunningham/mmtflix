import styled from 'styled-components'

export const Wrap = styled.article`
  border-radius: 2px;
`

export const BackgroundImage = styled.button`
  min-height: 380px;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  width: 100%;
  border: none;
`

export const Title = styled.div`
  margin-bottom: 10px;
`
