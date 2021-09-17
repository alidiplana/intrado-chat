import React from "react";
import PageHeader from "./components/header/Header";
import LiveChat from "./components/liveChat/LiveChat";
import Users from "./components/users/Users";

const App = () => {
  return (
    <div style={{ backgroundColor: "#f6f9f9" }}>
      <PageHeader />
      <LiveChat />
      <Users />
    </div>
  );
};

export default App;
