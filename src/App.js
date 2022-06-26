import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const Error = lazy(() => import("./pages/error"));
const Home = lazy(() => import("./pages/home"));
const Details = lazy(() => import("./pages/details"));

function App() {
  return (
    <Router>
      <Error>
        <Suspense fallback={"Cargando..."}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>
        </Suspense>
      </Error>
    </Router>
  );
}

export default App;
