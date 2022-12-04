import React, { Fragment, useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

//vsetko teraz cez Todos Context!
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <Fragment>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              onDeleteItem={todosCtx.removeTodo}
            />
          ); //pozna aj key pretoze je FC
        })}
      </ul>
    </Fragment>
  );
};

export default Todos;
