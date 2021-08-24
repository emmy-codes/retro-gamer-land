import React from "react";
import { Link } from "react-router-dom";

function MiniGameIcon() {
  return (
    <>
      <Link className="mini-game icon-text all-icons" to="/retro-gamer-land">
        Retro Gamer Land
      </Link>
    </>
  );
}

export default MiniGameIcon;