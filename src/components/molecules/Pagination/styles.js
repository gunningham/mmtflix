import styled from 'styled-components'

export const Wrap = styled.section`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Results = styled.div`
  font-size: 12px;
  
  @media (${({ theme }) => theme.media.tablet}) {
    font-size: 18px;
  }
`

export const PaginationWrap = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`
