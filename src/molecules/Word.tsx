import { Draggable, Droppable } from 'react-beautiful-dnd';
import { WordCss } from '../styles/molecules/Word-css';

interface WordData {
  word : any
}

export function Word(props : WordData) {
  
  return (
    <WordCss>
      <Droppable droppableId="word">
        {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
            {props.word}
            </ul>
          )}
        </Droppable>
      </WordCss>
      )
    }