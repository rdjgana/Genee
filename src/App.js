import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:id" element={<Category />} />
      </Routes>

      <Footer />
   </>
  );
};

export default App;
