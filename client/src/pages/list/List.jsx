import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import { RaceBy } from "@uiball/loaders";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [city, setCity] = useState(location.state.city);
  const [startDate, setStartDate] = useState(location.state.startDate);
  const [seats, setSeats] = useState(location.state.seats);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/restaurants?city=${city}&min=${min || 0}&max=${
      max || 99999
    }`
  );
  console.log(location);

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="lsItem">
              <label>City</label>
              <input placeholder={city} type="text" />
            </div>
            <div className="lsItem">
              <label>Reservation Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                isClearable
                placeholderText="When are we going?"
                className="date"
              />
            </div>
            <div className="lsItem">
              <label>Seats</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Reservation Fee <small>per person</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Reservation Fee <small>per person</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Seats</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={seats.seat}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
