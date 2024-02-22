// src/services/api.js
import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

export const fetchPlanets = async (page = 1) => {
  try {
    const response = await axios.get(
      `${SWAPI_BASE_URL}/planets/?page=${page}&format=json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error; // Re-throw the error to be handled where the function is called
  }
};

export const fetchResidents = async (residentUrls) => {
  try {
    const promises = residentUrls.map((url) => axios.get(url));
    const responses = await Promise.all(promises);
    return responses.map((res) => res.data);
  } catch (error) {
    console.error("Error fetching residents:", error);
    throw error;
  }
};
