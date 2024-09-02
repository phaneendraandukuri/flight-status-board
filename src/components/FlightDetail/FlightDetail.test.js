import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FlightDetail } from ".";
import { useFlightById } from "../../custom-hooks/useFlights";
import { getFormattedTime } from "../../utils";

jest.mock("../../custom-hooks/useFlights", () => ({
  useFlightById: jest.fn(),
}));

jest.mock("../../components", () => ({
  Loader: () => <div>Loading flights</div>,
  ErrorBanner: ({ message }) => <div>Error: {message}</div>,
}));

describe("FlightDetail Component", () => {
  const flight = {
    id: 1,
    flightNumber: "AB123",
    airline: "Airline A",
    origin: "City A",
    destination: "City B",
    departureTime: "2024-08-31T15:00:00Z",
    status: "On Time",
  };

  test("renders flight details correctly when flight data is provided", () => {
    useFlightById.mockReturnValue({
      data: flight,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(
      screen.getByText(`Flight Details for ${flight.flightNumber}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Airline: ${flight.airline}`)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${flight.origin}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Destination: ${flight.destination}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `Departure Time: ${getFormattedTime(flight.departureTime)}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(`Status: ${flight.status}`)).toBeInTheDocument();
    expect(screen.getByText("Go back to All Flights")).toBeInTheDocument();
  });

  test("shows loading state correctly", () => {
    useFlightById.mockReturnValue({ data: null, loading: true, error: null });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(screen.getByText("Loading flights")).toBeInTheDocument();
  });

  test("shows error message when there is an error", () => {
    useFlightById.mockReturnValue({
      data: null,
      loading: false,
      error: { message: "Failed to load flight data" },
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(
      screen.getByText(
        "Error: Error loading flight data: Failed to load flight data"
      )
    ).toBeInTheDocument();
  });

  test("renders the 'Go back to All Flights' link with correct URL", () => {
    useFlightById.mockReturnValue({
      data: flight,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    const link = screen.getByText("Go back to All Flights");
    expect(link).toHaveAttribute("href", "/");
  });

  test("displays flight number in the correct format", () => {
    useFlightById.mockReturnValue({
      data: flight,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(
      screen.getByText(`Flight Details for ${flight.flightNumber}`)
    ).toBeInTheDocument();
  });

  test("renders correctly when no flight data is provided", () => {
    useFlightById.mockReturnValue({
      data: {},
      loading: false,
      error: null,
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(screen.getByText("Flight Details for")).toBeInTheDocument();
    expect(screen.getByText("Airline:")).toBeInTheDocument();
    expect(screen.getByText("Origin:")).toBeInTheDocument();
    expect(screen.getByText("Destination:")).toBeInTheDocument();
    expect(
      screen.getByText("Departure Time: Invalid Date")
    ).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
  });

  test("handles invalid date format gracefully", () => {
    const invalidFlight = {
      ...flight,
      departureTime: "invalid-date",
    };

    useFlightById.mockReturnValue({
      data: invalidFlight,
      loading: false,
      error: null,
    });

    render(
      <Router>
        <FlightDetail />
      </Router>
    );

    expect(
      screen.getByText("Departure Time: Invalid Date")
    ).toBeInTheDocument();
  });
});
