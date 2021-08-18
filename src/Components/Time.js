import React, { useState } from "react";

function Time() {
  const [hours, setHours] = useState(new Date()); // "hours" stores the new Date state, useState function grabs the time **upon loading**
  function getTime() {
    setHours(new Date()); // updates the time on var "hours"
  };
  setInterval(getTime, 60000); // re-checking the time every 60secs

  return ( // always runs after the above function
    <>
      <div className="time">{`${hours.getHours()}:${ // getHours and getMInutes are built-in functions
        hours.getMinutes() < 10 ? "0" : ""
      }${hours.getMinutes()}`}</div>
    </>
  );
};

export default Time;