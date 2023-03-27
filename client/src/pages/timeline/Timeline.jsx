import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ReservationTimeline from "../../components/timeline/ReservationTimeline";

const Timeline = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <ReservationTimeline />
    </div>
  );
};

export default Timeline;
