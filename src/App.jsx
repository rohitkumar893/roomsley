import { useEffect } from "react";
import Navbar from "./components/Navbar";
import NavButtons from "./components/NavButtons";
import SearchBar from "./components/Searchbar";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const pingBackend = async () => {
    try {
      const res = await fetch("https://roomsleybackendrender.onrender.com/ping");
      const data = await res.text();
      console.log("Backend Response:", data);
    } catch (err) {
      console.error("Backend not reachable:", err);
    }
  };

  useEffect(() => {
    pingBackend();
  }, []);

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
