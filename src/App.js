// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlanetCard from "./components/PlanetCard";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/?page=${currentPage}&format=json`
        );
        setPlanets(response.data.results);
        setHasNextPage(!!response.data.next);
        setHasPrevPage(!!response.data.previous);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container">
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planetUrl={planet.url} />
      ))}
      <Pagination
        onPrevClick={handlePrevPage}
        onNextClick={handleNextPage}
        hasPrev={hasPrevPage}
        hasNext={hasNextPage}
      />
    </div>
  );
};

export default App;
