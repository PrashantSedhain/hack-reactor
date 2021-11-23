import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { BASE_API_URL } from "../constants/constants";

import SearchBarComponent from "../components/SearchBarComponent/SearchBarComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import TableComponent from "../components/TableComponent/TableComponent";

const Homepage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const searchHandler = () => {
    axios
      .get(
        `${BASE_API_URL}start_date=${formatDate(
          startDate
        )}&end_date=${formatDate(endDate)}&api_key=${
          process.env.REACT_APP_NASA_API_KEY
        }`
      )
      .then((res) => {
        var asteroidData = [];
        Object.values(res.data.near_earth_objects).forEach((arrValue) => {
          asteroidData = [...asteroidData, ...arrValue];
        });
        setSearchResults(asteroidData);
        setLoading(false);
      });
  };

  return (
    <div>
      <TitleComponent title="Near Earth Object Finder" />
      <SearchBarComponent
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onSearchClicked={searchHandler}
        selectedStartDate={startDate}
        selectedEndDate={endDate}
      />
      {!loading ? (
        <div style={{ margin: "2em 4em 0 4em" }}>
          <TableComponent data={searchResults} />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner animation="border" variant="dark" />
        </div>
      )}
    </div>
  );
};

export default Homepage;
