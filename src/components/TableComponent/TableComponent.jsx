import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Hazardous</th>
        </tr>
      </thead>
      <tbody>

          {props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
                </tr>
            
              );
            })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
