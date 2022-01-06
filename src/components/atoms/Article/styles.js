import styled from 'styled-components'

export const Wrap = styled.article`
  border-radius: 2px;
  overflow-y: scroll;
  
  @media (${({ theme }) => theme.media.tablet}) {
    display: flex;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`

export const Image = styled.img`
  width: 270px;
  display: none;
  
  @media (${({ theme }) => theme.media.tablet}) {
    display: block;;
    margin-right: 40px;
  }
`

export const Label = styled.span`
  font-weight: normal;
`

export const Info = styled.div`
  margin-bottom: 10px;
  `

export const Description = styled.p`
  margin-top: 30px;
  font-weight: normal;
  line-height: 1.4;
`
