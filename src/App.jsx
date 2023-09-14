import Home from "./components/Home";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import TodolistForm from "./components/TodolistForm";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/TodolistForm" Component={TodolistForm} />
      </Routes>
    </div>
  );
}

export default App;
