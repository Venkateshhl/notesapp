import {useState} from 'react'

import {v4 as uuid} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Heading,
  EnterCard,
  BgButton,
  EnterCardBg,
  Title,
  TextArea,
  AddButton,
  EmptyNotesImage,
  EmptyShowing,
  NoNotesHeading,
  ParaForNoNotes,
  NotesData,
  ListOfEachItem,
  Bg,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')

  const [textArea, setTextArea] = useState('')

  const [listOfData, setListOfData] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const changeTextArea = event => {
    setTextArea(event.target.value)
  }

  const addToList = event => {
    event.preventDefault()
    const newData = {
      title,
      textArea,
      id: uuid(),
    }

    setListOfData(prevState => [...prevState, newData])
    setTitle('')
    setTextArea('')
  }

  return (
    <Bg>
      <Heading>Notes</Heading>

      <EnterCardBg>
        <EnterCard>
          <form onSubmit={addToList}>
            <div>
              <Title
                type="text"
                placeholder="Title"
                onChange={changeTitle}
                value={title}
              />
            </div>
            <div>
              <TextArea
                type="textArea"
                placeholder="Take a Note..."
                onChange={changeTextArea}
                value={textArea}
              />
            </div>

            <BgButton>
              <div>
                <AddButton type="submit" onClick={addToList}>
                  Add
                </AddButton>
              </div>
            </BgButton>
          </form>
        </EnterCard>
      </EnterCardBg>

      <div>
        {listOfData.length === 0 ? (
          <EmptyShowing>
            <div>
              <EmptyNotesImage
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
            </div>
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <ParaForNoNotes>Notes you add will appear here</ParaForNoNotes>
          </EmptyShowing>
        ) : (
          <NotesData>
            {listOfData.map(each => (
              <ListOfEachItem key={each.id}>
                <NoteItem key={each.id} data={each} />
              </ListOfEachItem>
            ))}
          </NotesData>
        )}
      </div>
    </Bg>
  )
}

export default Notes
