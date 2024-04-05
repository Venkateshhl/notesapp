import styled from 'styled-components'

export const TitleHeading = styled.h2`
  color: #1e293b;
`

export const NotesPara = styled.p`
  color: #334155;
  font-weight: 500;
`
export const EachCard = styled.div`
  width: 300px;
  height: 160px;
  border: 1px solid #aab8c8;
  border-radius: 8px;
  padding: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
  overflow: auto;
  list-style-type: none;
  @media screen and (min-width: 767px) {
    margin-right: 12px;
    margin-bottom: 12px;
    width: 300px;
  }
`
