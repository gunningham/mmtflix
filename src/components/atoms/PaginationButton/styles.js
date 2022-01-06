import styled, { css } from 'styled-components'

export const Wrap = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 2px;
  background: none;
  
  ${props => props.isDisabled && css`
    opacity: 0.4;

    &:hover {
      cursor: not-allowed;
    }
  `}
`
