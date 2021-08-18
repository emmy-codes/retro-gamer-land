import React, { useState } from "react";

function Time() {
  const [hours, setHours] = useState(new Date())
  function getTime() {
    setHours(new Date())
  };
  setInterval(getTime, 60000);

  return (
    <>
      <div className="time">{`${hours.getHours()}:${
      hours.getMinutes() < 10 ? "0" : ""
    }${hours.getMinutes()}`}</div>
    </>
  );
}

export default Time;