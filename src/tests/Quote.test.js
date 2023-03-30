import React from "react";
import Quote from "../component/pages/Quote";
// import TestRenderer from "react-test-renderer";
import renderer from "react-test-renderer";
// import { render, screen } from "@testing-library/react";

describe("Quote component", () => {
  it("renders when there is quote", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test("renders loading state initially", async () => {
  //   render(<Quote />);

  //   expect(screen.getByText("loading...")).toBeInTheDocument();
  // });

  // test("renders quote and author after loading", async () => {
  //   const mockData = {
  //     author: "John Doe",
  //     quote:
  //       "Money cannot buy happiness, but it’s a lot more comfortable to cry in a Mercedes than on a bicycle.",
  //   };

  //   jest.spyOn(global, "fetch").mockImplementation(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve([mockData]),
  //     })
  //   );

  //   render(<Quote />);

  //   expect(await screen.findByText(mockData.author)).toBeInTheDocument();
  //   expect(await screen.findByText(mockData.quote)).toBeInTheDocument();
  // });

  // test("renders error message when fetch fails", async () => {
  //   const mockErrorMessage = "Error fetching data";

  //   jest
  //     .spyOn(global, "fetch")
  //     .mockImplementation(() => Promise.reject(mockErrorMessage));

  //   render(<Quote />);

  //   expect(await screen.findByText(mockErrorMessage)).toBeInTheDocument();
  // });
});
