import todoReducer, { addTodo, deleteComplitedTodos, sortTodos, updateTodo
} from './../TodoSlice';
import {TodoState } from '../../types/TodoTypes';

describe('todoSlice', () => {
    const initialState: TodoState = {
        todos: [],
        filtered: [],
    };

    it('Get todos', () => {
        const res = todoReducer(undefined, {type: ''});
        expect(res).toEqual({"filtered": [], "todos": []});
    });

    it('Add new todo', () => {
        const actions = {type: addTodo.type, payload: 'Test title for todo'};
        const res = todoReducer(initialState, actions);
        expect(res.todos[0].title).toBe('Test title for todo');
        expect(res.todos[0].status).toBe(false);

    });

    it ('Delete complited todos', () => {
        const actions = {type: deleteComplitedTodos.type, payload: true};
        const res = todoReducer(initialState, actions);
        expect(res).toEqual(initialState);
    });

    it('Soting todos', () => {
        const actions = {type: sortTodos.type, payload: 123};
        const res = todoReducer(initialState, actions);
        expect(res).toEqual(initialState);
    });

    it('Update todo', () => {
        const actions = {type: updateTodo.type, payload: '123'};
        const res = todoReducer(initialState, actions);
        expect(res).toEqual(initialState);
    });
})
