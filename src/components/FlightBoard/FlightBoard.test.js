import React from "react";
import { render, screen } from "@testing-library/react";
import { FlightBoard } from ".";
import { useFlights } from "../../custom-hooks/useFlights";

jest.mock("../../custom-hooks/useFlights");
jest.mock("../BoardHeader", () => ({
  BoardHeader: () => (
    <thead>
      <tr>
        <th>Mocked Header</th>
      </tr>
    </thead>
  ),
}));

jest.mock("../FlightRow", () => ({
  FlightRow: ({ flightNumber }) => (
    <tr>
      <td>{flightNumber}</td>
    </tr>
  ),
}));

describe("FlightBoard Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the loader when data is loading", () => {
    useFlights.mockReturnValue({ data: [], loading: true, error: null });

    render(<FlightBoard />);

    expect(screen.getByText("Loading Flights")).toBeInTheDocument();
  });

  test("displays an error message when there is an error", () => {
    useFlights.mockReturnValue({
      data: [],
      loading: false,
      error: { message: "Failed to fetch data" },
    });

    render(<FlightBoard />);

    expect(
      screen.getByText("Error loading flight data: Failed to fetch data")
    ).toBeInTheDocument();
  });

  test("renders the table with flight rows when data is available", () => {
    const mockFlights = [
      {
        id: 1,
        flightNumber: "FL123",
        airline: "Airline A",
        origin: "City A",
        destination: "City B",
        departureTime: "10:00 AM",
        status: "On Time",
      },
      {
        id: 2,
        flightNumber: "FL456",
        airline: "Airline B",
        origin: "City C",
        destination: "City D",
        departureTime: "11:00 AM",
        status: "Delayed",
      },
    ];
    useFlights.mockReturnValue({
      data: mockFlights,
      loading: false,
      error: null,
    });

    render(<FlightBoard />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("FL123")).toBeInTheDocument();
    expect(screen.getByText("FL456")).toBeInTheDocument();
  });

  test("renders the table header even when there are no flights", () => {
    useFlights.mockReturnValue({ data: [], loading: false, error: null });

    render(<FlightBoard />);

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();

    const rows = screen.queryAllByRole("row");
    expect(rows).toHaveLength(1);
  });

  test("renders the table header even when data is undefined", () => {
    useFlights.mockReturnValue({
      data: undefined,
      loading: false,
      error: null,
    });

    render(<FlightBoard />);

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();

    const rows = screen.queryAllByRole("row");
    expect(rows).toHaveLength(1);
  });
});
