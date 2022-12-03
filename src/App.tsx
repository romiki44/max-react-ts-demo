import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

const DUMMY_TODOS: Todo[] = [
  new Todo('Learn React'),
  new Todo('Learn Typescript'),
  new Todo('Master Javascript'),
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  //const [todos, setTodos]=useState<Todo[]>([]);  //alebo takto, ak default value je []

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
