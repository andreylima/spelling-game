import { Draggable, Droppable } from 'react-beautiful-dnd';
import { LettersCss } from '../styles/molecules/Letters-css';

interface LettersData {
    letters : any
}

export function Letters(props : LettersData) {
    
    return (
      <LettersCss>
        <Droppable droppableId="letters">
        {(provided) => (
          <>
            <ul className="letters" {...provided.droppableProps} ref={provided.innerRef}>
              {props.letters.map((letter : string, index : number) => (
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
        </LettersCss>
    )
}