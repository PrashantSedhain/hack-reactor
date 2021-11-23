import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { BASE_API_URL } from "../constants/constants";
import { formatDate } from '../utilities/utilityMethods'
import SearchBarComponent from "../components/SearchBarComponent/SearchBarComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import TableComponent from "../components/TableComponent/TableComponent";

const Homepage = () => {

  const [startDate, setStartDate] = useState(new Date(2020, 0, 5));
  const [endDate, setEndDate] = useState(new Date(2020, 0, 8));
  const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchHandler();
  }, []);

  const searchHandler = () => {
    setLoading(true);
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
        console.log(res.data);
        setTotalCount(res.data.element_count);
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
        <div style={{ margin: "2em 4em 4em 4em" }}>
          <TableComponent data={searchResults} totalCount={totalCount} />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4em" }}>
          <Spinner animation="border" variant="dark" />
        </div>
      )}
    </div>
  );
};

export default Homepage;
