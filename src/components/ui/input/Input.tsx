import React, {FC, useState} from 'react';
import { useAppDispatch } from '../../../hooks/useReduxHook';
import { addTodo } from '../../../store/TodoSlice';
import * as todoConst from '../../../constants/todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faPlus, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon 
                className={style.add} 
                onClick={todoHandler} 
                icon={faSquarePlus}
            />}
        </div>
    );
};

export default Input;