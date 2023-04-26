import React, { useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RaceBy } from "@uiball/loaders";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./restaurant.css";
import EmailList from "../../components/emailList/EmailList";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Reserve from "../../components/reserve/Reserve";

function RestaurantLayout() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { restaurantId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [selectedTableId, setSelectedTableId] = useState(null);


  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/restaurants/find/${id}`
  );

  const { seats } = useContext(SearchContext);

  console.log(seats.seat);


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlide;
    if (direction === "l") {
      newSlide = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlide = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlide);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
      ) : (
        <div className="restaurantContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="restaurantWrapper">
            <h1 className="restaurantTitle">{data.name}</h1>
            <div className="restaurantAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                {data.city}, {data.address}
              </span>
            </div>
            <div className="restaurantImages">
              {data.photos?.map((photo, i) => (
                <div className="restaurantImagesWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="restaurantImg"
                  />
                </div>
              ))}
            </div>
            <div className="restaurantMenu">
              <h2 className="menuTitle">Our Menu</h2>
              {data.menu?.map((item) => (
                <div className="menuItemWrapper">
                  <ul>
                    <li className="menuItems">
                      {item.name} - {item.price} LE
                      <p>{item.description}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="restaurantDetails">
              <div className="restaurantDetailsTexts">
                <h1 className="restaurantTitle">Details</h1>
                <p className="restaurantDesc">{data.description}</p>
              </div>
              <div className="restaurantDetailsPrice">
                <h1>The best spot in town!</h1>
                <span>
                  We have the best food to ever exist ever please come on down
                  and try it for yourself and have our most amazing staff greet
                  you and treat you
                </span>
                <h2>
                  <b>{seats.seat * data.price} LE</b>/ {seats.seat} (Person(s))
                </h2>
                <button onClick={handleClick}>Find Your Table!</button>
              </div>
            </div>
            <button className="back" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} restaurantId={id} />}
      <EmailList />
    </div>
  );
}

export default RestaurantLayout;
