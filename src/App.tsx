import TodosMenu from './components/navigations/todos-menu/TodosMenu';
import Todos from './components/Todos/Todos';
import Input from './components/ui/input/Input';
import * as todoConst from './constants/todos';
import style from './App.module.scss';

function App() {
  return (
    <>
      <div className={style.title}>{todoConst.todosTitle}</div>
      <div className={style.container}>
        <Input />
        <Todos />
        <TodosMenu />
      </div>
    </>
  )
}

export default App;
