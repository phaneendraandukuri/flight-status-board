import { FlightBoard } from "./components/FlightBoard";
import { useFlights } from "./custom-hooks/useFlights";
import "./App.css";

function App() {
  const flights = useFlights();

  return (
    <div className="App">
      <FlightBoard flights={flights} />
    </div>
  );
}

export default App;
