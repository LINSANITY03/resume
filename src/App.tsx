import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/index";

function App() {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;