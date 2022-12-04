import { useState } from 'react';
import NewTodoOld from './components/NewTodo-old';
import TodosOld from './components/Todos-old';
import Todo from './models/todo';

export const DUMMY_TODOS: Todo[] = [
  new Todo('Learn React'),
  new Todo('Learn Typescript'),
  new Todo('Master Javascript'),
];

//*******************************
// Original bez Context Providera!
//********************************
function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  //const [todos, setTodos]=useState<Todo[]>([]);  //alebo takto, ak default value je []

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

  return (
    <div>
      <NewTodoOld onAddTodo={addTodoHandler} />
      <TodosOld items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
