import React from "react";
import DateInputComponent from "../DateInputComponent/DateInputComponent";
import "./SearchBarComponent.css";
const SearchBarComponent = (props) => {
    return (
        <div style={{ border: "solid 2px magenta", display: "flex", justifyContent: "center" }}>
            <DateInputComponent/>
            <DateInputComponent/>
            <button onClick={props.onSearchClickedHandler} className="button searchButton" type="submit">Search</button>
        </div>
    )
}

export default SearchBarComponent;