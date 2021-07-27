// Greet App

// function App(){
//     var t1 = new Date();
// t1 = t1.getHours();
// var day = " ";
// const colur = { };
// if (t1 > 1 && t1 < 12) {
//     day = "Good Morning";
//     colur.color = 'green';
// } else if (t1 > 12 && t1 < 20) {
//     day = "Good Afternoon";
// colur.color = 'orange';
// } else if (t1 > 20 && t1 < 24) {
//     day = "Good Night";
//     colur.color = 'Grey';
// }

// return (
// <><h1>Hello,<span style={colur}> {day} </span></h1></>
// )

// }
// export default App;


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Clock with Hooks

var App = () => {

    var Newtime = new Date().toLocaleTimeString();
    
    const [Ctime,Setime]=useState(Newtime);
    
    const Time = () => {
        var Cttime = new Date();
        Cttime = Cttime.toLocaleTimeString();
        Setime(Cttime);
    }
  return (<>
  <h1>{Newtime}</h1>
  <button onClick={Time}>Click me</button>
  </>
)
}


export default App;