// src/components/PlanetCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ResidentList from "./ResidentList";
import "./PlanetCard.css";

const PlanetCard = ({ planetUrl }) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await axios.get(planetUrl);
        setPlanet(response.data);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      }
    };

    fetchPlanetData();
  }, [planetUrl]);

  return (
    <div className="planet-card">
      {planet && (
        <>
          <h2>{planet.name}</h2>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
          <ResidentList residentsUrls={planet.residents} />
        </>
      )}
    </div>
  );
};

export default PlanetCard;
