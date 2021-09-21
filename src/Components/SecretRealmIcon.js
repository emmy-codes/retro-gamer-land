import React from "react";
import { Link } from "react-router-dom";

function SecretRealmIcon() {
  return (
    <>
      <Link to="the-secret-realm" className="secret-realm icon-text all-icons">
        The Secret Realm <br />(Currently inactive)
      </Link>
    </>
  );
}

export default SecretRealmIcon;