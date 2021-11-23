import React from "react";
import { Button } from "react-bootstrap";
import DateInputComponent from "../DateInputComponent/DateInputComponent";

const SearchBarComponent = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DateInputComponent
          id="start-date"
          label="Select Start Date"
          setDate={props.setStartDate}
          selectedDate={props.selectedStartDate}
        />
        <DateInputComponent
          id="end-date"
          label="Select End Date"
          setDate={props.setEndDate}
          selectedDate={props.selectedEndDate}
        />
      </div>
      <div style={{textAlign: "center"}}> 
      <Button onClick={props.onSearchClicked} variant="outline-dark">
        Search
      </Button>
      </div>

    </div>
  );
};

export default SearchBarComponent;
