import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
`

export const Button = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  bottom: 0;
  transform: translateY(-25%);
`

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background-color: initial;
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 2px;
  padding: 15px;
  font-size: 16px;
  min-width: 100%;
  font-weight: bold;

  @media (${({ theme }) => theme.media.tablet}) {
    min-width: 500px;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: bold;
  }
`
