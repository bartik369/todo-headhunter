import { render} from "@testing-library/react";
import Input from "./Input";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'


describe('Test input component', () => {
    const initialState = {
        todos: [],
    }
    const mockStore = configureStore();
    let store = mockStore(initialState);

    test('Render', () => {
        render (
            <Provider store={store}>
                 <Input />
            </Provider>
        )
    });

    test('Snapshot', () => {
        const input = render (
            <Provider store={store}>
                 <Input />
            </Provider>
        )
        expect(input).toMatchSnapshot();
    });
});