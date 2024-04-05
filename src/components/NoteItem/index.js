import {TitleHeading, NotesPara, EachCard} from './styledComponents'

const NoteItem = props => {
  const listOfData = props
  const detailsOfList = listOfData.data

  console.log(detailsOfList)
  return (
    <EachCard>
      <TitleHeading>{detailsOfList.title}</TitleHeading>
      <NotesPara>{detailsOfList.textArea}</NotesPara>
    </EachCard>
  )
}

export default NoteItem
