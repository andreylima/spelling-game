import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';
import { letterState } from '../recoilAtom/letters';
import { LettersCss } from '../styles/molecules/Letters-css';

export const Letters = () => {
  const letters = useRecoilValue(letterState)
    return (
      <LettersCss>
        <Droppable droppableId="letters" direction='horizontal'>
        {(provided, snapshot) => (
            <ul className={`headerPlaceholder ${snapshot.isDraggingOver ? 'isDraggingOver' : 'white'}`} {...provided.droppableProps} ref={provided.innerRef}>
              {letters.map((letter : any, index : number) => (
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