import { render} from "@testing-library/react";
import Todos from "./Todos";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe('Test Todos component', () => {
  const initialState = {
    todos: [],
  }
  const mockStore = configureStore();
  let store = mockStore(initialState);

  it('Render', () => {
    render (
      <Provider store={store}>
        <Todos />
      </Provider>
    )
  });

  it('Snapshot', () => {
    const todosList = render (
      <Provider store={store}>
        <Todos/>
      </Provider>
    )
    expect(todosList).toMatchSnapshot();
  });
})