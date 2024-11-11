import React, {FC, useState} from 'react';
import { useAppDispatch } from '../../../hooks/useReduxHook';
import { addTodo } from '../../../store/TodoSlice';
import * as todoConst from '../../../constants/todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import style from './Input.module.scss';

const Input:FC = () => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useAppDispatch();

    const todoHandler = () => {
        title && dispatch(addTodo(title));
        setTitle('');
    }
    const checkPressEnter = (e:React.KeyboardEvent) => {
        if (e.key === "Enter") todoHandler();
    }
    
    return (
        <div className={style.input}>
            <input
            placeholder={todoConst.inputPlaceholder}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => checkPressEnter(e)}
            value={title}
            type="text"
            />
            <FontAwesomeIcon 
                className={style.icon} 
                icon={faChevronDown}
            />
            {title &&
            <button name="add-btn" onClick={todoHandler} className={style.add}>
                <FontAwesomeIcon title={todoConst.addTodo} icon={faSquarePlus}/>
            </button>
            }
        </div>
    );
};

export default Input;