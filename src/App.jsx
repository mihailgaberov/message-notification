import React from "react";
import MessageNotification from "./MessageNotification.jsx";
import MessageNotificationCSS from "./MessageNotificationCSS.jsx";

const App = () => {
  return (
    <main className="container mx-auto p-8 flex">
      <section title="Tailwind CSS">
        <h2 className="text-2xl font-bold mb-4">TailwindCSS</h2>
        <div className="p-8 space-y-4">
          <MessageNotification type="success" message="Operation successful!" />
          <MessageNotification type="error" message="An error occurred." />
          <MessageNotification
            type="info"
            message="This is some information."
          />
          <MessageNotification type="warning" message="Please be cautious!" />
        </div>
      </section>
      <section title="CSS">
        <h2 className="text-2xl font-bold mb-4">CSS</h2>
        <div className="p-8 space-y-4">
          <MessageNotificationCSS
            type="success"
            message="Operation successful!"
          />
          <MessageNotificationCSS type="error" message="An error occurred." />
          <MessageNotificationCSS
            type="info"
            message="This is some information."
          />
          <MessageNotificationCSS
            type="warning"
            message="Please be cautious!"
          />
        </div>
      </section>
    </main>
  );
};

export default App;
