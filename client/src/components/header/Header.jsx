import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faPerson,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [openSeats, setSeatsOptions] = useState(false);
  const [seats, setSeats] = useState({
    seat: 1,
  });
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faUtensils} />
            <span>Restaurants</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Reservations</span>
          </div>
        </div>
        <h1 className="headerTitle">A brand new dining experience</h1>
        <p className="headerDescription">Pick your favourite table</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUtensils} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are we eating?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span className="headerSearchText"></span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="When are we going?"
              className="date"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${seats.seat} seats`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Seats</span>
                <div className="optionCounter">
                  <button className="optionCounterBtn">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterBtn">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
