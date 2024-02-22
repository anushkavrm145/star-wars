// src/components/ResidentList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ResidentList.css";

const ResidentList = ({ residentsUrls }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidentsData = async () => {
      try {
        const promises = residentsUrls.map((url) => axios.get(url));
        const responses = await Promise.all(promises);
        const residentData = responses.map((res) => res.data);
        setResidents(residentData);
      } catch (error) {
        console.error("Error fetching resident data:", error);
      }
    };

    fetchResidentsData();
  }, [residentsUrls]);

  return (
    <div className="resident-list">
      <h3>Notable Residents:</h3>
      <ul>
        {residents.map((resident) => (
          <li key={resident.name}>
            <p>Name: {resident.name}</p>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
