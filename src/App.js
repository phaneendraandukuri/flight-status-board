import { useEffect, useState } from "react";
import { FlightBoard } from "./components/FlightBoard";
import "./App.css";

function App() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    fetch("https://flight-status-mock.core.travelopia.cloud/flights")
      .then((res) => res.json())
      .then(setFlights);
  }, []);

  return (
    <div className="App">
      <FlightBoard flights={flights} />
    </div>
  );
}

export default App;
