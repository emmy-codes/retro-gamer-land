import React, {useRef} from "react";

function StartMenu() {

  let startMenu = useRef(null);
  let openStartMenu = useRef(null);

  function openMenu() {
    if (startMenu.current.classList.contains("hidden")) {
      startMenu.current.classList.remove("hidden");
      openStartMenu.current.classList.add("clicked-start-button");
    } else {
      startMenu.current.classList.add("hidden");
      openStartMenu.current.classList.remove("clicked-start-button");
    }
  };
  
  return (
    <>
      <div
        className="start-button win-icon"
        ref={openStartMenu}
        onClick={openMenu}
      >
        Start
      </div>

      <div className="start-menu hidden" ref={startMenu}>
        <div className="side-bar">
          <p className="side-bar-text">
            Windows <span class="nr95">95</span>
          </p>
        </div>

        <div className="menu-items">
          <div className="menu-item folder-img" id="documents">
            Documents
          </div>
          <div className="menu-item folder-img" id="documents">
            Fake Folder
          </div>
          <div className="menu-item folder-img" id="documents">
            Fake Folder 2
          </div>
          </div>
        </div>
    </>
  );
};

export default StartMenu;