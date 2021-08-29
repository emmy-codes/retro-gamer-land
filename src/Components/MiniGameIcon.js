import React from "react";
import { Link } from "react-router-dom";

function MiniGameIcon() {
  return (
    <>
      <Link to="/retro-gamer-land" className="mini-game icon-text all-icons">
        Retro Gamer Land
      </Link>
    </>
  );
}

export default MiniGameIcon;
