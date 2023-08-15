import React from "react";
import Header from "./Header";
import ReservationForm from "./ReservationForm";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ReservationForm />
    </div>
  );
};

export default App;
