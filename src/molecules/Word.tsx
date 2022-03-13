import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { wrongLettersState } from '../recoilAtom/answerValidation';
import { wordState } from '../recoilAtom/wordState';
import { WordCss } from '../styles/molecules/Word-css';

export const Word = () => {
  const word = useRecoilValue(wordState)
  const wrongLetters = useRecoilValue(wrongLettersState)
  return (
    <WordCss>
      <Droppable droppableId="word" direction='horizontal'>
        {(provided, snapshot) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className={`word ${snapshot.isDraggingOver ? 'isDraggingOver' : 'white'}`}>
            {word.map((letter : {id: string, content:string }, index : number) => (
                <Draggable draggableId={letter.id} index={index} key={letter.id}>
                  {(provided,snapshot) => { 
                    return (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={`${wrongLetters.indexOf(letter.id) != -1 ? "wrong" : ""} ${snapshot.isDragging ? 'isDragging' : 'white'}`}>
                      {letter.content}
                    </li>
                    )}}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </WordCss>
      )
    }