import React from "react";
import DateInputComponent from "../DateInputComponent/DateInputComponent";
import "./SearchBarComponent.css";
const SearchBarComponent = (props) => {
    return (
        <div style={{display: "flex", justifyContent: "center" }}>
            <DateInputComponent id="start-date" label="Select Start Date" setDate={props.setStartDate} selectedDate={props.selectedStartDate} />
            <DateInputComponent id="end-date" label="Select End Date" setDate={props.setEndDate} selectedDate={props.selectedEndDate}/>
            <button onClick={props.onSearchClicked} className="button searchButton" type="submit">Search</button>
        </div>
    )
}

export default SearchBarComponent;