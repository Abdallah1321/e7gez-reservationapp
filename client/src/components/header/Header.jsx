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
import {useNavigate} from "react-router-dom"

const Header = ({type}) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [openSeats, setSeatsOptions] = useState(false);
  const [seats, setSeats] = useState({
    seat: 1,
  });

  const handleOption = (seat, operation) => {
    setSeats((prev) => {
      return {
        ...prev,
        [seat]: operation === "i" ? seats[seat] + 1 : seats[seat] - 1,
      };
    });
  };

  const navigate = useNavigate()

  const handleSearch = () =>{
    navigate("/restaurants", { state: {city, startDate, seats}})
  } 

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        { type !== "list" &&
        <><h1 className="headerTitle">
          A brand New Dining Experience Here in Egypt!
        </h1>
        <p className="headerDescription">
          Make reservations like never before and pick your favourite table!
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faUtensils} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are we eating?"
              className="headerSearchInput"
              onChange={e=>setCity(e.target.value)}
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
            <span onClick={()=>setSeatsOptions(!openSeats)} className="headerSearchText">{`${seats.seat} seats`}</span>
            {openSeats &&<div className="options">
              <div className="optionItem">
                <span className="optionText">Seats</span>
                <div className="optionCounter">
                  <button
                  disabled={seats.seat <=1}
                    className="optionCounterBtn"
                    onClick={() => handleOption("seat", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{seats.seat}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOption("seat", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div> </> }
      </div>
    </div>
  );
};

export default Header;
