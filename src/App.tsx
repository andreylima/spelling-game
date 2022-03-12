import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { spellItemState } from "./recoilAtom/spellItem"
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
import { wordState } from "./recoilAtom/wordState"


export interface letter {
  id : string
  content : string
}

function App() {
  const [spellingItem, setspellingItem] = useRecoilState(spellItemState)
  const  [letters, updateLetters] = useRecoilState(letterState)
  const [word, updateWord] = useRecoilState(wordState)
  const [count, setCount] = useState(0)
  const [notice, setNotice ] = useState("Loading new word")
  useEffect(() => {
    const getSpellItem = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url)
      let body = await resp.json()
      body["letter-pool"] = body["letter-pool"].map((letter : [],index : number) => ({
        id: `item-${index}`,
        content: letter
      }))
      setspellingItem(body)
      updateLetters(body["letter-pool"])
      setNotice("Click above to play")
    }
    getSpellItem()
  }, [])

  function onDragEnd(result : any) {
    if (!result.destination) return
    const lettersArray = Array.from(letters)
    const wordArray = Array.from(word)
    const souceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;
    if (souceId != destinationId) {
      const [removed] = lettersArray.splice(result.source.index, 1)
      wordArray.splice(result.destination.index, 0, removed)
      updateLetters(lettersArray)
      updateWord(wordArray)
    } 
    if (souceId == destinationId) {
      if (souceId == "letters"){
        const [removed] = lettersArray.splice(result.source.index, 1)
        lettersArray.splice(result.destination.index, 0, removed)
        updateLetters(lettersArray)
      }
      if (souceId == "word"){
        const [removed] = wordArray.splice(result.source.index, 1)
        wordArray.splice(result.destination.index, 0, removed)
        updateWord(wordArray)
      }
    }
  }

  function jump(){
    setCount(count+1)
  }

  function checkSpelling(){
    var wordString: string = ""
    word.forEach((item : any, index : number) => (
      wordString += item.content
    ))
    const postSpelling = async () => {
      const url = "https://api.beta.slangapp.com/recruitment/spelling"
      const resp = await fetch(url,{
        method: "POST",
        body: JSON.stringify({"id": spellingItem.id, "answer": wordString}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      let res = await resp.json()
      console.log(res)
    }
    postSpelling()
  }

  return spellingItem.id ? (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="main">
        <h1>Spelling Game</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <WordBox
              audioUrl={spellingItem["audio-url"]}
              notice={notice}/>
            <Letters/>
            <ButtonCss>
              <button onClick={checkSpelling}>CHECK</button>
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
