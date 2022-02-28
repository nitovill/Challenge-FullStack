import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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
    <List>
      <ListItem>
        <ListItemText
          primary="Photos"
          secondary="Jan 9, 2014"
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
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
