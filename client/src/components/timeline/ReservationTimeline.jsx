import React from "react";
import "./reservationTimeline.css";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    restaurant: "Restaurant A",
    table: "Table 1",
    seats: 4,
    date: "2023-03-15",
    time: "12:30 PM",
  },
  {
    id: 2,
    name: "Jane Smith",
    restaurant: "Restaurant B",
    table: "Table 3",
    seats: 2,
    date: "2023-03-16",
    time: "6:00 PM",
  },
  {
    id: 3,
    name: "Bob Johnson",
    restaurant: "Restaurant A",
    table: "Table 2",
    seats: 2,
    date: "2023-03-17",
    time: "8:00 PM",
  },
  {
    id: 4,
    name: "Sarah Lee",
    restaurant: "Restaurant C",
    table: "Table 5",
    seats: 6,
    date: "2023-03-18",
    time: "7:30 PM",
  },
];

const ReservationTimeline = () => {
  const reservationItems = sampleData.map((reservation) => (
    <li key={reservation.id}>
      <div className="reservation-time">{reservation.time}</div>
      <div className="reservation-details">
        <div className="reservation-restaurant">{reservation.restaurant}</div>
        <div className="reservation-name">{reservation.name}</div>
        <div className="reservation-table">Table {reservation.table}</div>
        <div className="reservation-seats">{reservation.seats} seats</div>
      </div>
    </li>
  ));

  return (
    <div className="timeline-container">
      <h1>Reservation Timeline</h1>
      <ul className="timeline">{reservationItems}</ul>
    </div>
  );
};

export default ReservationTimeline;
