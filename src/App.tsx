import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { spellingItem, spellingItemState } from "./recoilAtom/spellItem"
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
import { countState, jumpedState, rightState, wrongState } from "./recoilAtom/ranking"
import { AnswerStatusState, noticeState, originalLengthState, wrongLettersState } from "./recoilAtom/answerValidation"
import useApi from "./Service/Service"


export interface letter {
  id : string
  content : string
}

function App() {
  const [spellingItem, setspellingItem] = useRecoilState(spellingItemState)
  const [letters, updateLetters] = useRecoilState(letterState)
  const [word, updateWord] = useRecoilState(wordState)
  const [AnswerStatus, setAnswerStatus] = useRecoilState(AnswerStatusState)
  const [wrongLetters, setWrongLettersState ] = useRecoilState(wrongLettersState)
  const [count, setCount] = useRecoilState(countState)
  const [rightCount, setRightCount] = useRecoilState(rightState)
  const [wrongCount, setWrongCount] = useRecoilState(wrongState)
  const [jumpedCount, setjumpedCount] = useRecoilState(jumpedState)
  const [originalWordLength, setOriginalWordLength] = useRecoilState(originalLengthState)
  const [notice, setNotice ] = useRecoilState(noticeState)

  const { getSpellItem, postSpelling } = useApi()

  function loadWord(){
      getSpellItem().then((body : spellingItem) => {
        setspellingItem(body)
        updateLetters(body["letter-pool"])
        setOriginalWordLength(body["letter-pool"].length)
        setNotice("Click above to play")
        setAnswerStatus("notSent")
        updateWord([])
      })

  }

  useEffect(() => {
    loadWord()
  }, [count])

  

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
    updateWord([])
    setjumpedCount(jumpedCount+1)
  }

  function checkSpelling(){
    if (word.length < originalWordLength){
      setAnswerStatus("less")
      return
    }
    var wordString: string = ""
    word.forEach((item : any, index : number) => (
      wordString += item.content
    ))
    
    postSpelling(spellingItem.id, wordString).then((res : any) => {
      const correctAnswer = res["correct-answer"];
      if(res.correct) {
        setRightCount(rightCount+1)
        setAnswerStatus(res.correct ? "true" : "false")
        setNotice("Congratulations! Wait for the next word.")
        setTimeout(() => {
          setCount(count+1)
        }, 2000);
      } else {
        setWrongCount(wrongCount+1)
        setAnswerStatus(res.correct ? "true" : "false")
        setNotice("Oops! Try again.")
        var wrongLettersArray = Array<string>()
        for (let index = 0; index < correctAnswer.length; index++) {
          if(correctAnswer[index] != word[index]['content']){
            wrongLettersArray.push(word[index]['id'])
          } 
        }
        setWrongLettersState(wrongLettersArray)
        setTimeout(() => {
          setWrongLettersState([])
        }, 2000);
      }
    })


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
