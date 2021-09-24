import React from "react";
import CV from "../Images/CV.jpg";

function MyCV(props) {
  return (
    <div className="cv-wrapper">
      <button className="close" onClick={props.close}>
        x
      </button>
      <img src={CV} />
    </div>
  );
}

export default MyCV;