import React from 'react'


import ReactDOM from "react-dom";
import CovidD from "./Covid Table";
import Data from "./worldwide-aggregate_json.jsx";
import css from "./index.css";

const CovidDatas = (val, index) => {
  return (
    <CovidD
    
      Confirmed={val.confirmed}
      Deaths={val.deaths}

      Recovered={val.recovered}
    
  
    />
  );
};
const App = () => {
  return (
    <>
      <table id="main-table">
        <thead>
          <tr>
            <td>Confirmed</td>
            <td>Deaths</td>
       
            <td>Recovered</td>
        
          </tr>
        </thead>
        <tbody>
        {Data.map(CovidDatas)}
        </tbody>
      </table>
    </>
  );
};
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
