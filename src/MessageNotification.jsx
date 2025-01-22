import React from "react";

const MessageNotification = ({ type, message }) => {
  const getTypeStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-500";
      case "error":
        return "bg-red-100 text-red-800 border-red-500";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-50 I0";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-500";
      default:
        return "bg-gray-100 text-gray-800 border-gray-500";
    }
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 border-l-4 rounded-lg shadow-md ${getTypeStyles(
        type
      )}`}
    >
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

export default MessageNotification;
