import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [operation, setOperation] = useState({
    concept: "",
    amount: "",
    typeId: "1",
  });

  const onInputChange = (e) => {
    setOperation({
      ...operation,
      [e.target.name]: e.target.value,
    });
    console.log(operation);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/operation", operation).then((res) => {
      setOperation({
        concept: "",
        amount: "",
        typeId: "",
      });
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ padding: "25px" }}>
          <select
            className="form-select"
            aria-label="Default select example"
            name="typeId"
            onChange={onInputChange}
          >
            <option value="1">Ingress</option>
            <option value="2">Egress</option>
          </select>

          <div className="col-auto">
            <label className="col-form-label">Amount</label>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              name="amount"
              required
              value={operation.amount}
              onChange={onInputChange}
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className="input-group">
            <span className="input-group-text">Concept</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              name="concept"
              required
              value={operation.concept}
              onChange={onInputChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <a href="http://localhost:3000">
        <button className="btn btn-primary">Home</button>
      </a>
    </div>
  );
};

export default Form;
