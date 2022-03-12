import { Draggable, Droppable } from 'react-beautiful-dnd';
import { LettersCss } from '../styles/molecules/Letters-css';

interface LettersData {
    letters : any
}

export function Letters(props : LettersData) {
    return (
      <LettersCss>
        <Droppable droppableId="letters" direction='horizontal'>
        {(provided, snapshot) => (
            <ul className={`headerPlaceholder ${snapshot.isDraggingOver ? 'isDraggingOver' : 'white'}`} {...provided.droppableProps} ref={provided.innerRef}>
              {props.letters.map((letter : any, index : number) => (
                <Draggable draggableId={letter.id} index={index} key={letter.id}>
                  {(provided,snapshot) => { 
                    return (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={snapshot.isDragging ? 'isDragging' : 'white'}>
                      {letter.content}
                    </li>
                    )}}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        </LettersCss>
    )
}