import {FC, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHook';
import { updateTodo } from '../../store/TodoSlice';
import { Checked } from '../../types/TodoTypes';
import * as todoConst from '../../constants/todos';
import style from './Todos.module.scss';

const Todos:FC = () => {
    const filtered = useAppSelector(state => state.todos.filtered);
    const dispatch = useAppDispatch();
    const [checkedItem, setCheckedItem] = useState<Checked>({});

    return (
        <div className={style.todos}>
          {filtered?.length ? filtered.map((item) => (
                <div key={item.id} className={style.todo}>
                  <label className={style.checkbox}>
                    <input
                      onChange={(e) => {
                        dispatch(updateTodo(item.id));
                        setCheckedItem({
                          ...checkedItem,
                          [item.id]: e.target.checked,
                        });
                      }}
                      className={style.check}
                      type="checkbox"
                      checked={checkedItem[item.id] || false}
                    />
                    <span className={style.check}/>
                  </label>
                  <div className={item.status ? style.done : style.title}>{item.title}</div>
                </div>
              ))
            : <div className={style.info}>{todoConst.noItems}</div>
            }
        </div>
      );
};

export default Todos;