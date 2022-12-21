import React from "react"
import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";

import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories" element={<Categories/>}/>
    </Routes>
  );
}

export default App;