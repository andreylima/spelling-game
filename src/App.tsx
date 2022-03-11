import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { AudioButton } from "./atoms/AudioButton"
import { wordState } from "./recoilAtom/word"
import { DragDropContext, Draggable, DraggableProvided, Droppable } from "react-beautiful-dnd"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { Letters } from "./molecules/Letters"
import { Word } from "./molecules/Word"

export interface letter {
  id : string
  content : string
}

function App() {
  const [repos, setRepos] = useRecoilState(wordState)
  const  [letters, updateLetters] = useState([])
  const [word, updateWord] = useState([])
  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url)
      const body = await resp.json()
      setRepos(body)
      const letterObj = body["letter-pool"].map((letter : [],index : number) => ({
        id: `item-${index}`,
        content: letter
      }))
      updateLetters(letterObj)
    }
    getRepos()
  }, [])

  function onDragEnd(result : any) {
    if (!result.destination) return
    const lettersArray = Array.from(letters)
    const wordArray = Array.from(word)
    if (result.source.droppableId != result.destination.droppableId) {
      const [removed] = lettersArray.splice(result.source.index, 1)
      wordArray.splice(result.destination.index, 0, removed)
      updateLetters(lettersArray)
      updateWord(wordArray)
    }
  }

  return repos.id ? (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AudioButton url={repos['audio-url']}/>
        <DragDropContext onDragEnd={onDragEnd}>
          <Word word={word}/>
          <Letters letters={letters}/>
        </DragDropContext>
      </ThemeProvider>
  ) : (
    <span>No repos found</span>
  );
}

export default App
