import React from "react";
import MathsMagician from "../component/pages/Calculator";
// import TestRenderer from "react-test-renderer";
import renderer from "react-test-renderer";

describe("Calculator Component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<MathsMagician />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// it("matches snapshot", () => {
//   const tree = renderer.create(<Calculator />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
