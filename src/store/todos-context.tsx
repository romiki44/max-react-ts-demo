import React, { useState } from 'react';
import { DUMMY_TODOS } from '../App';
import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

//React18 uz mepbsahuje v ramci Functional Componentu (FC) property childreen
//preto to treba urobit samostatne, napr. takto cez interface...vid stackoverflow :)
interface Props {
  children: React.ReactNode;
}

//typscript umoznuje nastavit typ pre context cez <>
export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  //const [todos, setTodos] = useState<Todo[]>([]); //alebo takto, ak default value je []

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
