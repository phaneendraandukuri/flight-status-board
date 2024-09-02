import { render, screen } from "@testing-library/react";
import { BoardHeader } from ".";

describe("BoardHeader Component", () => {
  test("renders all the table headers correctly", () => {
    render(<BoardHeader />);

    expect(screen.getByText("Flight Number")).toBeInTheDocument();
    expect(screen.getByText("Airline")).toBeInTheDocument();
    expect(screen.getByText("Origin")).toBeInTheDocument();
    expect(screen.getByText("Destination")).toBeInTheDocument();
    expect(screen.getByText("Departure Time")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });
});
