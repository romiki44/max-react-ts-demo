import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

//vsetko teraz cez Todos Context!!!
const NewTodoOld: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Text</label>
      <input type='text' id='text' ref={textInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoOld;
