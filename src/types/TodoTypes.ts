export interface Todo {
    id: string;
    title: string;
    status: boolean;
}
export interface ITodoProps {
    todo: Todo[];
}
export interface TodoState {
    todos: Todo[];
    filtered: Todo[];
}
export type Checked = {
    [index: string]: boolean;
}
