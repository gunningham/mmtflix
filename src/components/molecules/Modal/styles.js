import styled from 'styled-components'

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(30 30 30 / 80%);
`

export const InnerWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transform: translate(-50%, -50%);
  padding: 40px;
  min-height: 300px;
  overflow-y: scroll;
  min-width: 300px;
  
  @media (${({ theme }) => theme.media.tablet}) {
    min-width: 900px;
  }
`

export const CloseButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  background: none;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  padding: 5px;
  
  svg {
    height: 20px;
    width: 20px;
    fill: white;
  }
`
