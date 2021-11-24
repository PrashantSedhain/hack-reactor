import React from "react";

const TitleComponent = (props) => {
    return (
        <div>
            <h2 style={{fontSize: "30px", color: "maroon", textAlign: "center", fontFamily: "cursive", paddingTop: "1em"}}>{props.title}</h2>
            <hr />
        </div>
    )
}

export default TitleComponent;