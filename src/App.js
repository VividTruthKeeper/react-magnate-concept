// IMPORT MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PERMANENT COMPONENTS
import Footer from "./components/Global/Footer";

// IMPORT PAGES
import Main from "./pages/Main";
import Furniture from "./pages/Furniture";
import Engineering from "./pages/Engineering";
import Design from "./pages/Design";
import Construction from "./pages/Construction";
import Supervision from "./pages/Supervision";
import AboutUs from "./pages/AbousUs";
import Portfolio from "./pages/Portfolio";

// IMPORT STYLES
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/service_furniture" element={<Furniture />} />
        <Route path="/service_engineering" element={<Engineering />} />
        <Route path="/service_design" element={<Design />} />
        <Route path="/service_construction" element={<Construction />} />
        <Route path="/service_supervision" element={<Supervision />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
      </Routes>
      {/* I put this component outside of Routes because it is displayed on all pages. */}
      <Footer />
    </div>
  );
}

export default App;
