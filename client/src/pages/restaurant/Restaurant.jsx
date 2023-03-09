import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Stage, Layer, Rect, Text } from "react-konva";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

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

  return (
    <div>
      <Navbar />
      <Header type="list" />
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
        <button onClick={handleConfirmReservation}>Confirm Reservation</button>
        <button onClick={() => history(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default RestaurantLayout;
