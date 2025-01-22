import React from "react";
import "./MessageNotification.css";

const MessageNotificationCSS = ({ type, message }) => {
  const getTypeStyles = (type) => {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "error";
      case "info":
        return "info";
      case "warning":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className={`notification ${getTypeStyles(type)}`}>
      <div>
        {type === "success" && <span>✔️</span>}
        {type === "error" && <span>❌</span>}
        {type === "info" && <span>ℹ️</span>}
        {type === "warning" && <span>⚠️</span>}
      </div>
      <span>{message}</span>
    </div>
  );
};

export default MessageNotificationCSS;
