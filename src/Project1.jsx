import React, { useState, useEffect } from "react";


const Project1 = () => {
  const [NewNum, SetNum] = useState(0);

  useEffect(() => {
    document.title=`You CLicked ${NewNum}`;
  });
  return (
    <>
      <div id="Main-Div" onClick={() => SetNum(NewNum + 1)}>Clicked me {NewNum}</div>
    
    </>
  );
};

export default Project1;
