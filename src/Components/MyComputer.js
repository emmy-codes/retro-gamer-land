import React from "react";
import AboutMe from "./AboutMe";

function MyComputer() {
  const [showOrHide, updateShowOrHide] = React.useState(false);
  
  function openText() {
    updateShowOrHide(true);
  };

  function closeText() {
    updateShowOrHide(false);
  }

  return (
    <>
      <div className="all-icons icon-text my-computer-icon" onClick={openText}>
        My Computer
        <br />
        (About me)
      </div>
      {showOrHide ? <AboutMe openOrClose={closeText} /> : null}
    </>
  );
}

export default MyComputer;