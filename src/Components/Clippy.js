import React from "react";

function Clippy() {
  const clippyText = (
    <div className="clippy-balloon icon-text">
      Hello! <br />
      It looks like you're visiting Emma's portfolio for the first time. Try
      clicking on any of the icons and see what happens!
    </div>
  );

  const [showOrHide, updateShowOrHide] = React.useState(true);

  function fkOffClippy() {
    updateShowOrHide(false);
  };

  return showOrHide ? (
    <>
      <div className="clippycontent">
        {
          clippyText /* pointless but showing how to store components in variables */
        }
        <div className="clippy"></div>
        <button className="close" onClick={fkOffClippy}>
          x
        </button>
      </div>
    </>
  ) : null;
}

export default Clippy;