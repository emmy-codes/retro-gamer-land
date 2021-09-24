import React from "react";
import MyCV from "./MyCV";


function CV(props) {
    const [showOrHide, updateShowOrHide] = React.useState(false);

    function openText() {
      updateShowOrHide(true);
    }

    function closeText() {
      updateShowOrHide(false);
    }
  return (
    <>
      <div className="all-icons icon-text cd-image" onClick={openText}>My CV</div>
      {showOrHide ? <MyCV close={closeText} /> : null}
    </>
  );
};

export default CV;