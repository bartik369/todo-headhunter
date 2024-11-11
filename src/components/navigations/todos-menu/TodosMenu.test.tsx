import { render } from "@testing-library/react";
import TodosMenu from "./TodosMenu";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe('Test TodosMenu component', () => {
  const initialState = {
    todos: []
  };
  const mockStore = configureStore();
  let store= mockStore(initialState);

  it('Render', () => {
    render (
      <Provider store={store}>
        <TodosMenu />
      </Provider>
    );
  });

  it('Snapshot', () => {
    const menuList = render(
      <Provider store={store}>
        <TodosMenu />
      </Provider>
    )
    expect(menuList).toMatchSnapshot();
  });

});