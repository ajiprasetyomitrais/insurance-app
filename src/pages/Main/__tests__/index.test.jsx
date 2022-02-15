import React from "react";
import renderer from "react-test-renderer";
import Main from "../Main";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test main component", () => {
  it("should display main comoponent properly", () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
