import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

// da sa deklarovat aj ako React.FC<{text: string}>, pretoze nepotrebujeme id...ale da sa aj takto
const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li className={classes.item}>{props.todo.text}</li>;
};

export default TodoItem;
