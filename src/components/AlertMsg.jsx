import React from "react";

export default function AlertMsg(props) {
  const capitalize = (e) => {
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  return (
    props.showAlert && (
      <div
        className={`alert alert-${props.showAlert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.showAlert.type)}</strong> :{" "}
        {props.showAlert.message}
      </div>
    )
  );
}
