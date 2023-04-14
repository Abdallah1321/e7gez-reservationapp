import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { Stage, Layer, Rect, Text } from "react-konva";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, restaurantId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/restaurants/table/${restaurantId}`
  );

  const { startDate } = useContext(SearchContext);

  const [selectedTableId, setSelectedTableId] = useState(null);

  const handleTableClick = (tableId) => {
    setSelectedTableId((prevSelectedTableId) => {
      if (prevSelectedTableId === tableId) {
        return null;
      } else {
        return tableId;
      }
    });
    console.log(tableId)
  };

  const date = new Date(startDate).getTime();

  const isNotBooked = (tableNumber) => {
    const isFound = (tableNumber.unavailableDates ?? []).some((dates) =>
      date.includes(new Date(dates).getTime())
    );

    return !isFound;
  };

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      if (selectedTableId) {
        const res = await axios.put(
          `http://localhost:8800/api/tables/availability/${selectedTableId}`,
          { dates: date }
        );
        setOpen(false)
        navigate("/")
        alert("Reservation Made!")
        return res.data
      }
      console.log("Reserved")

    } catch (err) {
      // Handle error
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your tables:</span>
        <div className="rInfo">
          <Stage width={400} height={400}>
            <Layer>
              <Rect x={0} y={0} width={400} height={400} fill="#f9f9f9" />
              {data.map((table) => (
                <Rect
                  key={table._id}
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  fill={selectedTableId === table._id ? "red" : "white"}
                  stroke="black"
                  strokeWidth={2}
                  onClick={() => handleTableClick(table._id)}
                  listening={isNotBooked(table._id)}
                />
              ))}
              {data.map((table) => (
                <Text
                  key={table.tableNumber}
                  x={table.x + table.width / 20}
                  y={table.y + table.height / 3}
                  text={`Table ${table.tableNumber} (${table.capacity} seats) \n ${table.features}`}
                  fontSize={12}
                  fontStyle="bold"
                  align="center"
                  verticalAlign="middle"
                />
              ))}
            </Layer>
          </Stage>
          <button onClick={handleClick} className="rButton">
            Reserve Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
