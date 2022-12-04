import React, { Fragment } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

//*******************************
// Original bez Context Providera!
//********************************

//FC->Functional Component
//aby sme nemuseli deklarovat props stale ako any, resp. pridavat children a pod
//staci deklarovovat ako FC...tym padom nastavi Todos ako functional component a prida type podporu
//<{items:string[]}> prida interny type pre FC, resp. pre props...vlastne sa zluci s base-typom!
//tym padom zacne vsade vyzadovat pri pouziti kompoentu Todos aj props.items:string[]!!!
//ak chcem optional treba pridat otaznik...{items?: string[]}...potom treba osetrit aj null hodnotu!
const TodosOld: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    //Max nastavil parameter id tu cez props.onRemoveItem.bind(null, item.id)
    //prvy argument pre bind() je this, tho je null, druhy je prvy parameter
    //to moje riesenie sa mi paci viac :)
    <Fragment>
      <ul className={classes.todos}>
        {props.items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              onDeleteItem={props.onRemoveTodo}
            />
          ); //pozna aj key pretoze je FC
        })}
      </ul>
    </Fragment>
  );
};

export default TodosOld;
