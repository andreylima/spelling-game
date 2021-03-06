import { useEffect, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AnswerStatusState } from '../recoilAtom/answerValidation';
import { letterState } from '../recoilAtom/spellItem';
import { LettersCss } from '../styles/molecules/Letters-css';

export const Letters = () => {
  const letters = useRecoilValue(letterState)
  const [AnswerStatus, setAnswerStatus] = useRecoilState(AnswerStatusState)
  const [remainingLetters, setRemainingLetters] = useState("rest")

  useEffect(()=>{
    if(AnswerStatus != "less") return
    setRemainingLetters("shake")
    setTimeout(() => {
      setRemainingLetters("rest")
      setAnswerStatus("notSent")
    }, 2000);
  },[AnswerStatus])

    return (
      <LettersCss>
        {letters &&
          <Droppable droppableId="letters" direction='horizontal'>
          {(provided, snapshot) => (
            <div className={`letterList ${snapshot.isDraggingOver ? 'isDraggingOver' : 'white'}`} {...provided.droppableProps} ref={provided.innerRef}>
                {letters.map((letter : any, index : number) => (
                  <Draggable draggableId={letter.id} index={index} key={letter.id}>
                    {(provided,snapshot) => { 
                      return (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`letter ${remainingLetters} ${snapshot.isDragging ? 'isDragging' : 'white'}`}>
                          {letter.content}
                      </div>
                      )}}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        }
        {!letters &&
          <ul></ul>
        }
        </LettersCss>
    )
}