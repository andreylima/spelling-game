import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { AudioButton } from "./atoms/AudioButton"
import { wordState } from "./recoilAtom/word"
import { DragDropContext, Draggable, DraggableProvided, Droppable } from "react-beautiful-dnd"

function App() {
  const [repos, setRepos] = useRecoilState(wordState)
  const  [letters, updateLetters] = useState([])
  const [word, updateWord] = useState()
  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url)
      const body = await resp.json()
      setRepos(body)
      updateLetters(body["letter-pool"])
    }
    getRepos()
  }, [])

  function onDragEnd(result : any) {
    if (!result.destination) return
    const lettersArray = Array.from(letters)
    const [reorderedItem] = lettersArray.splice(result.source.index, 1)
    lettersArray.splice(result.destination.index, 0, reorderedItem)
    updateLetters(lettersArray)
    updateWord(reorderedItem)
  }

  return repos.id ? (
      <>
        <AudioButton url={repos['audio-url']}/>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="letters">
          {(provided) => (
            <>
              <ul className="letters" {...provided.droppableProps} ref={provided.innerRef}>
                {letters.map((letter : string, index) => (
                  <Draggable draggableId={letter} index={index} key={index}>
                    {(provided) => { 
                      return (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        {letter}
                      </li>
                      )}}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
              
              </>
            )}
          </Droppable>
          <Droppable droppableId="word">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {word}
            </ul>
          )}
          </Droppable>
        </DragDropContext>
      </>
  ) : (
    <span>No repos found</span>
  );
}

export default App
