import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = (props) => {
  return (
    <div >
      <h5 style={{fontFamily: "cursive", textAlign: "center", textDecoration: "underline" }}>Total Results: {props.totalCount} </h5>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Hazardous</th>
            <th>Estimated Diameter in Miles (Max)</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
                <td>{item.estimated_diameter.miles.estimated_diameter_max}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
