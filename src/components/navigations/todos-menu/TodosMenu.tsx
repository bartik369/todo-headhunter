import {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { sortTodos, deleteComplitedTodos} from '../../../store/TodoSlice';
import { itemValuesArr } from '../../../utils/menuData';
import { useCountHook } from '../../../hooks/useCountHook';
import { todosMenuData } from '../../../utils/menuData';
import * as todoConst from '../../../constants/todos';
import style from './TodosMenu.module.scss';

const TodosMenu:FC = () => {
    const [activeMenu, setActiveMenu] = useState(1);
    const todos = useAppSelector(state => state?.todos?.todos);
    const [countItems, setCountItems] = useState(0);
    const dispatch = useAppDispatch();
    const [getItemValues] = useCountHook();

    const handleMenu = (id: number) => {
        dispatch(sortTodos(id));
        setActiveMenu(id);
    };
    const resetHandler = () => {
        dispatch(deleteComplitedTodos());
    };

    useEffect(() => {
        dispatch(sortTodos(activeMenu));
    }, [resetHandler]);

    useEffect(() => {
        const counts = todos?.filter(item => !item.status);
        setCountItems(counts?.length);
    }, [todos]);
    
    return (
      <div className={style.panel}>
        <div className={style.total}>
          {getItemValues(countItems, itemValuesArr)}
          {todoConst.items}
        </div>
        <div className={style.navigation}>
        <menu className={style.menu}>
          <ul>
            {todosMenuData.map((item) => (
              <li
                className={activeMenu === item.id ? style.selected : ""}
                onClick={() => handleMenu(item.id)}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </menu>
        <button className={style.reset} onClick={resetHandler}>
          {todoConst.resetComplited}
        </button>
        </div>
      </div>
    );
};

export default TodosMenu;