import React from "react";
import { Link } from "react-router-dom";

function MiniGameIcon() {
  return (
    <>
      <Link
        to="/retro-gamer-land"
        className="retro-gamer-land icon-text all-icons"
      >
        Retro Gamer Land
      </Link>
    </>
  );
};

export default MiniGameIcon;