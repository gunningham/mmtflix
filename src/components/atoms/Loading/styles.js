import styled, { keyframes } from 'styled-components'

const loader = keyframes`
  0%,
  100% {
    box-shadow: 0 -3em 0 .2em, 2em -2em 0 0, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }

  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 .2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }

  25% {
    box-shadow: 0 -3em 0 -.5em, 2em -2em 0 0, 3em 0 0 .2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }

  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 0, 2em 2em 0 .2em, 0 3em 0 0, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }

  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0, 0 3em 0 .2em, -2em 2em 0 0, -3em 0 0 -1em, -2em -2em 0 -1em;
  }

  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 .2em, -3em 0 0 0, -2em -2em 0 -1em;
  }

  75% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0 0 .2em, -2em -2em 0 0;
  }

  87.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0 0 0, -2em -2em 0 .2em;
  }
`

export const Spinner = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  animation: ${loader} .8s infinite linear;
  transform: translate(-50%);
  color: ${({ theme }) => theme.colors.tertiary};
  width: 10px;
  height: 10px;
`
