import React from "react";
import "../Alert.css";

function capitalize(str) {
  if (!str) return "";
  if (str === "danger") {
    str = "error";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Alert(props) {
  return (
    props.alert && (
      <div className={`custom-alert ${props.alert.type}`}>
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
