import React from "react";
import Navbar from "./components/Navbar";
import NavButtons from "./components/NavButtons";
import SearchBar from "./components/Searchbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="first w-full h-full flex flex-col">
      <Navbar />
      <NavButtons />
      <SearchBar />
      <Hero />
    </div>
  );
}

export default App;
