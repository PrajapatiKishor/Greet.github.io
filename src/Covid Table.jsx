import React from "react";
import css from "./index.css"

const CovidD = (props) => {
  return (
    <>
      <tr id="table-row">
        
        <td>{props.Confirmed}</td>
        <td>{props.Deaths}</td>
        <td>{props.Increaserate}</td>
        <td>{props.Recovered}</td>
        <td>{props.Date}</td>
      </tr>
    </>
  );
};

export default CovidD;
