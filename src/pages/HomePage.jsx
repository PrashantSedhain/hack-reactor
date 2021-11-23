import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BASE_API_URL } from "../constants/constants";
import SearchBarComponent from "../components/SearchBarComponent/SearchBarComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import TableComponent from "../components/TableComponent/TableComponent";

const Homepage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStartDate("2015-08-07");
    setEndDate("2015-08-08");
    axios
      .get(
        `${BASE_API_URL}start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
      )
      .then((res) => {
        var asteroidData = [];
        Object.values(res.data.near_earth_objects).forEach((arrValue) => {
          asteroidData = [...asteroidData, ...arrValue];
        });
        setSearchResults(asteroidData);
        setLoading(false);
      });
  }, []);

  const getSearchResults = () => {};

  return (
    <div>
      <TitleComponent title="Near Earth Object Finder" />
      <SearchBarComponent onSearchClickedHandler={getSearchResults} />
      {!loading ? (
        <div style={{ margin: "2em 4em 0 4em" }}>
          <TableComponent data={searchResults} />
        </div>
      ) : (
        <div style={{border: "solid magenta 2px", display: "flex", justifyContent: "center"}}>
          <Spinner animation="border" variant="dark" />
        </div>
      )}

      {/*  */}
    </div>
  );
};

export default Homepage;
