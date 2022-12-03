import React, { Fragment } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

//FC->Functional Component
//aby sme nemuseli deklarovat props stale ako any, resp. pridavat children a pod
//staci deklarovovat ako FC...tym padom nastavi Todos ako functional component a prida type podporu
//<{items:string[]}> prida interny type pre FC, resp. pre props...vlastne sa zluci s base-typom!
//tym padom zacne vsade vyzadovat pri pouziti kompoentu Todos aj props.items:string[]!!!
//ak chcem optional treba pridat otaznik...{items?: string[]}...potom treba osetrit aj null hodnotu!
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <Fragment>
      <ul className={classes.todos}>
        {props.items.map((item) => {
          return <TodoItem key={item.id} todo={item} />; //pozna aj key pretoze je FC
        })}
      </ul>
    </Fragment>
  );
};

export default Todos;
