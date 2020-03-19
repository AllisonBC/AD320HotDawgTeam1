import React from "react";
import "./Vendor.css";
import { useHistory } from "react-router-dom";

export const VendorButton = props => {
  let history = useHistory();

  function handleClick() {
    history.push("/vendorLanding");
  }
  return (
    <div className="createAccount2">
      <button type="button"onClick={handleClick}>
      Sign In
      </button>
    </div>
  );
};
