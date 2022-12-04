import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

//*******************************
// Original bez Context Providera!
//********************************

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //treba nastavit type pre useRef ako HtmlInputElement, inac hlasi chybu...v javascripte je to ok
  //treba nastavit aj default hodnotu..eventualne moze byt napojeny uz pri inicializacii na nejaky element
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //typescript nevie, ci uz je textInputRef connectnuty na nejaky element
    //...preto current?.value...a enteredtext je typu string | undefined
    //mozeme zmenit na current!.value....ak viem, ze sme connectnuty a hodnota nebude null
    //(aj ked sa nic nevyplni, bude to '' cize prazdny string, ale nie null!!)...len typ string!
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    //treba zadefinovat ze props moze mat odkaz na funkciu...cez FC<>
    //return value nepotrebujeme, cize vrati sa void...plus jeden parameter enteredtext typu string
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Text</label>
      <input type='text' id='text' ref={textInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
