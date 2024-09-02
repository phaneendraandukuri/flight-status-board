import { renderHook } from "@testing-library/react-hooks";
import { useFetch, useFlightById } from "./useFlights";
import { useParams } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

describe("useFetch", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should fetch data and update state", async () => {
    const mockData = { key: "value" };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate(); // wait for the state to update

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should handle fetch errors", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch error"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate(); // wait for the state to update

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error("Fetch error"));
  });

  it("should refresh data at specified interval", async () => {
    const mockData = { key: "value" };
    fetchMock.mockResponses(
      [JSON.stringify(mockData), { status: 200 }],
      [JSON.stringify({ key: "new value" }), { status: 200 }]
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/data", 1000)
    );

    await waitForNextUpdate(); // Initial fetch

    expect(result.current.data).toEqual(mockData);

    // Wait for refresh interval and check if data is updated
    jest.advanceTimersByTime(1000);
    await waitForNextUpdate();

    expect(result.current.data).toEqual({ key: "new value" });
  });

  it("should fetch flight data based on id from useParams", async () => {
    const mockData = { flight: "details" };
    useParams.mockReturnValue({ id: "123" });
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const { result, waitForNextUpdate } = renderHook(() => useFlightById());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate(); // wait for the state to update

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
