import { Route, Routes } from "react-router-dom";
import { FlightBoard, FlightDetail } from "./components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightBoard />} />
      <Route path="/flight/:id" element={<FlightDetail />} />
    </Routes>
  );
}

export default App;
