// IMPORT MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PERMANENT COMPONENTS
import Footer from "./components/Global/Footer";

// IMPORT PAGES
import Main from "./pages/Main";
import Furniture from "./pages/Furniture";

// IMPORT STYLES
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/service_furniture" element={<Furniture />} />
      </Routes>
      {/* I put this component outside of Routes because it is displayed on all pages. */}
      <Footer />
    </div>
  );
}

export default App;
