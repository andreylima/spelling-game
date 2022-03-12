import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { wordState } from "./recoilAtom/word"
import { DragDropContext } from "react-beautiful-dnd"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { Letters } from "./molecules/Letters"
import { WordBox } from "./organisms/WordBox"
import { ButtonCss } from "./styles/atoms/Button-css"
import { LinkIcon } from "./atoms/LinkIcon"
import JumpIcon from './assets/svg/JumpIcon.svg'
import { letterState } from "./recoilAtom/letters"


export interface letter {
  id : string
  content : string
}

function App() {
  const [repos, setRepos] = useRecoilState(wordState)
  const  [letters, updateLetters] = useRecoilState(letterState)
  const [word, updateWord] = useState([])
  const [count, setCount] = useState(0)
  const [notice, setNotice ] = useState("Loading new word")
  useEffect(() => {
    const getRepos = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url)
      let body = await resp.json()
      body["letter-pool"] = body["letter-pool"].map((letter : [],index : number) => ({
        id: `item-${index}`,
        content: letter
      }))
      console.log(body["letter-pool"])
      setRepos(body)
      updateLetters(body["letter-pool"])
      setNotice("Click above to play")
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

  function jump(){
    setCount(count+1)
  }

  return repos.id ? (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="main">
        <h1>Spelling Game</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <WordBox
              audioUrl={repos["audio-url"]}
              word={word}
              notice={notice}/>
            <Letters letters={letters}/>
            <ButtonCss>
              <button>CHECK</button>
            </ButtonCss>
            <LinkIcon
            side="right"
            onClick={jump}>
              <img src={JumpIcon}/>
            </LinkIcon>
          </DragDropContext>
        </div>
      </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="main">
        <h1>Spelling Game</h1>
        <WordBox
        notice={notice}
        />
      </div>
    </ThemeProvider>
  );
}

export default App
