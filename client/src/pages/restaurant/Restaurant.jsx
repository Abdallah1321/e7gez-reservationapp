import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./restaurant.css";
import EmailList from "../../components/emailList/EmailList";

function RestaurantLayout() {
  const { restaurantId } = useParams();
  const history = useNavigate();

  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleTableClick = (tableId) => {
    if (selectedTableId === tableId) {
      setSelectedTableId(null);
    } else {
      setSelectedTableId(tableId);
    }
  };

  const handleConfirmReservation = () => {
    if (selectedTableId) {
      alert(`Reservation confirmed for table ${selectedTableId}`);
      setSelectedTableId(null);
    } else {
      alert("Please select a table to make a reservation.");
    }
  };

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // This is a simplified example of the layout and table data
  const layout = {
    tables: [
      {
        id: 1,
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        capacity: 4,
        features: ["near balcony"],
      },
      {
        id: 2,
        x: 200,
        y: 50,
        width: 100,
        height: 100,
        capacity: 6,
        features: ["near plants"],
      },
      {
        id: 3,
        x: 50,
        y: 200,
        width: 100,
        height: 100,
        capacity: 2,
        features: ["near window"],
      },
      {
        id: 4,
        x: 200,
        y: 200,
        width: 100,
        height: 100,
        capacity: 8,
        features: [],
      },
    ],
  };

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1622140739492-f82f386260b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1622140739492-f82f386260b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
  ];

  const menuItems = [
    {
      item: "Chicken and Rice",
      price: 87,
    },
    {
      item: "Beef Buritto",
      price: 120,
    },
    {
      item: "Pasta",
      price: 110,
    },
    {
      item: "Pasta",
      price: 110,
    },
    {
      item: "Pink Lemonade",
      price: 35,
    },
    {
      item: "Orange juice",
      price: 35,
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlide;
    if(direction==="l"){
      newSlide = slideNumber === 0 ? 5 : slideNumber-1
    } else{
      newSlide = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlide)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="restaurantContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        )}
        <div className="restaurantWrapper">
          <h1 className="restaurantTitle">Thai Restaurant</h1>
          <div className="restaurantAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>90 Street, Concord Plaza</span>
          </div>
          <div className="restaurantImages">
            {photos.map((photo, i) => (
              <div className="restaurantImagesWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="restaurantImg"
                />
              </div>
            ))}
          </div>
          <div className="restaurantMenu">
            <h2 className="menuTitle">Our Menu</h2>
            {menuItems.map((item) => (
              <div className="menuItemWrapper">
                <ul>
                  <li className="menuItems">
                    {item.item} - {item.price} LE
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <h2>Restaurant Layout</h2>
          <p>Select a table to make a reservation.</p>
          <div>
            <Stage width={400} height={400}>
              <Layer>
                <Rect x={0} y={0} width={400} height={400} fill="#f9f9f9" />
                {layout.tables.map((table) => (
                  <Rect
                    key={table.id}
                    x={table.x}
                    y={table.y}
                    width={table.width}
                    height={table.height}
                    fill={selectedTableId === table.id ? "red" : "white"}
                    stroke="black"
                    strokeWidth={2}
                    onClick={() => handleTableClick(table.id)}
                  />
                ))}
                {layout.tables.map((table) => (
                  <Text
                    key={table.id}
                    x={table.x + table.width / 20}
                    y={table.y + table.height / 3}
                    text={`Table ${table.id} (${table.capacity} seats) \n ${table.features}`}
                    fontSize={12}
                    fontStyle="bold"
                    align="center"
                    verticalAlign="middle"
                  />
                ))}
              </Layer>
            </Stage>
          </div>
          <div>
            {selectedTableId && (
              <p>
                You have selected table {selectedTableId}.<br />
                Please select the number of seats:
                <select>
                  {Array.from(
                    {
                      length: layout.tables.find(
                        (table) => table.id === selectedTableId
                      ).capacity,
                    },
                    (_, i) => i + 1
                  ).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </p>
            )}
            <div className="restaurantDetails">
              <div className="restaurantDetailsTexts">
                <h1 className="restaurantTitle">Details</h1>
                <p className="restaurantDesc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                  ad esse fugit corporis quibusdam aperiam voluptatum nisi vitae
                  culpa odit iste ullam assumenda excepturi voluptate debitis,
                  in tempore repellat natus.
                </p>
              </div>
              <div className="restaurantDetailsPrice">
                <h1>The best spot in town!</h1>
                <span>
                  We have the best food to ever exist ever please come on down
                  and try it for yourself and have our most amazing staff greet
                  you and treat you
                </span>
                <h2>
                  <b>300 LE</b> (3 Person(s))
                </h2>
                <button onClick={handleConfirmReservation}>
                  Confirm Reservation
                </button>
              </div>
            </div>
            <button onClick={() => history(-1)}>Go Back</button>
          </div>
        </div>
      </div>
      <EmailList />
    </div>
  );
}

export default RestaurantLayout;
