import React from "react";
import "./ListItem.css";

const ListItem = ({ amount, concept, type }) => {
  var classType = "green";
  if (type === "egress") classType = "red";
  return (
    <li className="list-group-item Items">
      <p>${amount}</p>
      <h4>{concept}</h4>
      <p style={{ color: classType }}>{type}</p>
    </li>
  );
};

export default ListItem;
