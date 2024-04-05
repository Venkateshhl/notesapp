import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  text-align: center;
`
export const EnterCard = styled.div`
  box-shadow: 4px 8px 16px 8px #cbd5e1;
  height: 200px;
  width: 300px;
  border-radius: 7px;
  padding: 23px;
  @media screen and (min-width: 767px) {
    width: 800px;
    height: 230px;
  }
`
export const BgButton = styled.div`
  text-align: right;
  padding-right: 23px;
`
export const EnterCardBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.input`
  color: #aab8c8;
  border: 0px;
  font-weight: 500;
  outline: none;
`
export const TextArea = styled.textarea`
  color: #aab8c8;
  border: 0px;
  font-weight: 500;
  outline: none;
  margin-top: 12px;
  width: 270px;
  height: 66px;
  @media screen and (min-width: 767px) {
    width: 745px;
    margin-top: 17px;
  }
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: 0px;
  border-radius: 7px;
  height: 40px;
  width: 77px;
  cursor: pointer;
  outline: none;
`
export const EmptyNotesImage = styled.img`
  height: 77px;
  @media screen and (min-width: 767px) {
    height: 120px;
  }
`
export const EmptyShowing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  @media screen and (max-width: 767px) {
    margin-top: 64px;
  }
`
export const NoNotesHeading = styled.h1`
  color: #475569;
  font-family: Roboto;
`

export const ParaForNoNotes = styled.p`
  color: #475569;
  font-family: Roboto;
  font-weight: 430;
`
export const NotesData = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  list-style-type: none;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }
`
export const ListOfEachItem = styled.li`
  width: 300px;
`
export const Bg = styled.div`
  height: 100vh;
  width: 100%;
`
