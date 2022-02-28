import axios from "axios";
import ListItem from "./ListItem";
import "./ListItem.css";
import React, { useEffect, useState } from "react";

const Lista = () => {
  const [operations, setOperations] = useState([]);
  const getOperations = () => {
    return axios
      .get("http://localhost:3001/api/operation")
      .then((response) => setOperations(response.data.data));
  };
  useEffect(() => {
    getOperations();
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item active Items">
        <p>Monto</p>
        <h5>Concepto</h5>
        <p>Tipo</p>
      </li>
      {operations.map((operation) => (
        <ListItem
          key={operation.id}
          concept={operation.concept}
          amount={operation.amount}
          type={operation.type?.name}
        />
      ))}
    </ul>
  );
};

export default Lista;

/* <div>
      {operations.map((operation) => (
        <div>
          <h1>{operation.concept}</h1>
          <h1>{operation.amount}</h1>
        </div>
      ))}
    </div> */
