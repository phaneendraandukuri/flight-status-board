import { Route, Routes } from "react-router-dom";
import { FlightBoard, FlightDetail } from "./components";
import { useFlights } from "./custom-hooks/useFlights";
import "./App.css";

function App() {
  const { flights, loading, error } = useFlights();

  if (loading) {
    return <div>Loading flights...</div>;
  }

  if (error) {
    return <div>Error loading flights: {error.message}</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<FlightBoard flights={flights} />} />
      <Route path="/flight/:id" element={<FlightDetail />} />
    </Routes>
  );
}

export default App;
