import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodosContextProvider from './store/todos-context';

export const DUMMY_TODOS: Todo[] = [
  new Todo('Learn React'),
  new Todo('Learn Typescript'),
  new Todo('Master Javascript'),
];

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
