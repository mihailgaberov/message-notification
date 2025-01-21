import React from "react";
import MessageNotification from "./MessageNotification.jsx";

const App = () => {
  return (
    <div className="p-8 space-y-4">
      <MessageNotification type="success" message="Operation successful!" />
      <MessageNotification type="error" message="An error occurred." />
      <MessageNotification type="info" message="This is some information." />
      <MessageNotification type="warning" message="Please be cautious!" />
    </div>
  );
};

export default App;
