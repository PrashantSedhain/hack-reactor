import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants/constants";
import CardComponent from "../components/CardComponent/CardComponent";
import SearchBarComponent from "../components/SearchBarComponent/SearchBarComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";

const Homepage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setStartDate("2015-08-07");
    setEndDate("2015-08-09");
  }, [startDate, endDate]);
  const getSearchResults = () => {
    axios
      .get(
        `${BASE_API_URL}start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => {
        setSearchResults(res.data.near_earth_objects);
      });
  };

  return (
    <div>
      <TitleComponent title="Near Earth Object Finder" />
      <SearchBarComponent onSearchClickedHandler={getSearchResults} />
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.entries(searchResults).forEach(([key, value]) => console.log(value))
}
        <CardComponent />
        <CardComponent />
        <CardComponent />s
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <p>{JSON.stringify(searchResults)}</p>
      </div>
    </div>
  );
};

export default Homepage;
