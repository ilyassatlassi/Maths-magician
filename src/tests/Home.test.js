// import MathsMagician from "../component/";
import Home from "../component/pages/Home";
// import TestRenderer from "react-test-renderer";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Home component", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it("Cheking for rendering the heading and paragraph", () => {
//     const { getByRole, getByText } = render(<Home />);
//     const heading = getByRole("heading", { name: /welcome to our page!/i });
//     const paragraph = getByText(/a calculator is an electronic device/i);
//     expect(heading).toBeInTheDocument();
//     expect(paragraph).toBeInTheDocument();
//   });

//   it("wheter it renders class", () => {
//     const { getByTestId } = render(<Home />);
//     const homePage = getByTestId("home-page");
//     expect(homePage).toHaveClass("home_page");
//   });
});
