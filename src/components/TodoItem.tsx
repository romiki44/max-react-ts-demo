import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

//da sa deklarovat aj ako React.FC<{text: string}>, pretoze nepotrebujeme id...ale da sa aj takto
//v pripade onDeleteItem, ak by som sem nedal cele Todo, len text, tak by som nepoznal ani id
//tym padom by bolo len volanie fukcie onDeleteItem bez argumentu id
//...toto som si vyskusal sam, to id mi nebolo uplne jasne, kde sa ma objavit
//..ale v mojom pripade to ide aj v tomto komponenete...inac teda o komponent vyssie!
const TodoItem: React.FC<{ todo: Todo; onDeleteItem: (id: string) => void }> = (
  props
) => {
  const deleteItemHandler = () => {
    props.onDeleteItem(props.todo.id);
  };

  return (
    <li className={classes.item} onClick={deleteItemHandler}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
