import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FlightRow } from ".";

jest.mock("../../utils", () => ({
  getFormattedTime: jest.fn((time) => time),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("FlightRow Component", () => {
  const flight = {
    id: 1,
    flightNumber: "AB123",
    airline: "Airline A",
    origin: "City A",
    destination: "City B",
    departureTime: "2024-08-31T15:00:00Z",
    status: "On Time",
  };

  test("renders FlightRow component", () => {
    render(
      <Router>
        <FlightRow {...flight} />
      </Router>
    );
    expect(screen.getByText(flight.flightNumber)).toBeInTheDocument();
    expect(screen.getByText(flight.airline)).toBeInTheDocument();
    expect(screen.getByText(flight.origin)).toBeInTheDocument();
    expect(screen.getByText(flight.destination)).toBeInTheDocument();
    expect(screen.getByText(flight.status)).toBeInTheDocument();
  });

  test("contains a link with correct URL", () => {
    render(
      <Router>
        <FlightRow {...flight} />
      </Router>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/flight/${flight.id}`);
  });
});
