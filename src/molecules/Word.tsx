import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { wordState } from '../recoilAtom/wordState';
import { WordCss } from '../styles/molecules/Word-css';

export const Word = () => {
  const word = useRecoilValue(wordState)
  return (
    <WordCss>
      <Droppable droppableId="word" direction='horizontal'>
        {(provided, snapshot) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className={`word ${snapshot.isDraggingOver ? 'isDraggingOver' : 'white'}`}>
            {word.map((letter : any, index : number) => (
                <Draggable draggableId={letter.id} index={index} key={letter.id}>
                  {(provided,snapshot) => { 
                    return (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={snapshot.isDragging ? 'isDragging' : 'white'}>
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