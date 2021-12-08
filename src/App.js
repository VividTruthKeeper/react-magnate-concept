// IMPORT MODULES
import React from "react";
import { Routes, Route } from 'react-router-dom';

// IMPORT PERMANENT COMPONENTS
import Footer from "./components/Global/Footer";
import ContactUs from "./components/Global/ContactUs";

// IMPORT PAGES
import Main from "./pages/Main";

// IMPORT STYLES
import './styles/style.scss';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <ContactUs />
    </div>
  );
}

export default App;
