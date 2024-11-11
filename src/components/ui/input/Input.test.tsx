import { render, screen} from "@testing-library/react";
import Input from "./Input";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import * as todoConst from '../../../constants/todos';


describe('Test input component', () => {
    const initialState = {
        todos: [],
    }
    const mockStore = configureStore();
    let store = mockStore(initialState);

    it('Render', () => {
        render (
            <Provider store={store}>
                 <Input />
            </Provider>
        )
    });

    it('Snapshot', () => {
        const input = render (
            <Provider store={store}>
                 <Input />
            </Provider>
        )
        expect(input).toMatchSnapshot();
    });

    it('Add Input', () => {
        render(
            <Provider store={store}>
                <Input />
            </Provider>
        )
        const inputElement = screen.getByPlaceholderText(todoConst.inputPlaceholder);
        expect(inputElement).toBeInTheDocument();
    });
});