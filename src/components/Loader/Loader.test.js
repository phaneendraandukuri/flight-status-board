import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("Loader Component", () => {
  test("renders Loader component with default size", () => {
    render(<Loader />);

    const spinner = screen.getByTestId("loader-spinner");
    expect(spinner).toBeInTheDocument();

    expect(spinner).toHaveStyle({
      width: "36px",
      height: "36px",
    });
  });

  test("renders Loader component with custom size", () => {
    render(<Loader size={50} />);

    const spinner = screen.getByTestId("loader-spinner");
    expect(spinner).toBeInTheDocument();

    expect(spinner).toHaveStyle({
      width: "50px",
      height: "50px",
    });
  });
});
