import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Dashboard from "./dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
