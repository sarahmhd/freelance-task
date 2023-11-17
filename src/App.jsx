import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
