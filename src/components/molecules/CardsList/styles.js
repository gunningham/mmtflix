import styled from 'styled-components'

export const ListWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  
  @media (${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
