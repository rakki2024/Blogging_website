import React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import "./App.css";
import Footer from "./Components/Footer";
import CatogeryBlocks from "./Pages/CatogeryBlocks";
import DedicatedBlock from "./Pages/DedicatedBlock";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Blogs/:category" element={<CatogeryBlocks />} />
        <Route path="/Blog/:id" element={<DedicatedBlock />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
