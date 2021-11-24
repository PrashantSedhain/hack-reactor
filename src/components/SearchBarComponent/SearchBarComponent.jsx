import React from "react";
import { Button } from "react-bootstrap";
import DateInputComponent from "../DateInputComponent/DateInputComponent";

const SearchBarComponent = (props) => {
    
  const dateFields = [
    {
      id: "start-date",
      label: "Select Start Date",
      setDate: props.setStartDate,
      selectedDate: props.selectedStartDate,
    },
    {
      id: "end-date",
      label: "Select End Date",
      setDate: props.setEndDate,
      selectedDate: props.selectedEndDate,
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {dateFields.map((item) => {
          return (
            <DateInputComponent
              key={item.id}
              id={item.id}
              label={item.label}
              setDate={item.setDate}
              selectedDate={item.selectedDate}
            />
          );
        })}
        ;
      </div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={props.onSearchClicked} variant="outline-dark">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBarComponent;
