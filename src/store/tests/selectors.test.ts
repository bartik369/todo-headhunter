//  import { selectTodos } from "./selectors";
import { Todo } from "../../types/TodoTypes";
 const selectTodos = (state: { filtered: Todo[]; }) => state.filtered;

 describe('Check Redux selectors', () => {
     it('Select todos from state', () => {
        const filtered = [{
            id: '123-abc',
            title: 'Test todo title',
            status: false,
        }];
        const res = selectTodos({filtered});
        expect(res).toEqual(filtered);
     })
 })