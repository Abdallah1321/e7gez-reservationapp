import "./newRestaurant.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRestaurant = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [tables, setTables] = useState([]);
  const [menu, setMenuItems] = useState([]);

  const navigate = useNavigate();

  const { data, loading, error } = useFetch("https://e7gez-be.onrender.com/api/tables");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleMenuItemChange = (index, event) => {
    const updatedMenuItems = [...menu];
    updatedMenuItems[index][event.target.name] = event.target.value;
    setMenuItems(updatedMenuItems);
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTables(value);
  };

  const handleAddMenuItem = () => {
    setMenuItems([...menu, { name: "", price: "", description: "" }]);
  };

  const handleRemoveMenuItem = (index) => {
    const updatedMenuItems = [...menu ];
    updatedMenuItems.splice(index, 1);
    setMenuItems(updatedMenuItems);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dmkf04l96/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newRestaurant = {
        ...info,
        tables,
        menu,
        photos: list,
      };

      await axios.post(
        "https://e7gez-be.onrender.com/api/restaurants",
        newRestaurant,
        config
      );
      navigate("/restaurants");
    } catch (err) {}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Restaurant</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {restaurantInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                {menu.map((menu, index) => (
                  <div key={index}>
                    <label>Item Name</label>
                    <input
                      type="text"
                      name="name"
                      value={menu.name}
                      placeholder="Grilled Chicken"
                      onChange={(event) => handleMenuItemChange(index, event)}
                    />
                    <label>Item Price</label>
                    <input
                      type="number"
                      name="price"
                      placeholder="20"
                      value={menu.price}
                      onChange={(event) => handleMenuItemChange(index, event)}
                    />
                    <label>Item Description</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Seasoned gourmet chicken, straight from the grill"
                      value={menu.description}
                      onChange={(event) => handleMenuItemChange(index, event)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMenuItem(index)}
                    >
                      Remove Menu Item
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddMenuItem}>
                  Add Menu Item
                </button>
              </div>
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectTables">
                <label>Tables</label>
                <select id="tables" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((table) => (
                        <option
                          key={table._id}
                          value={table._id}
                        >{`Table Number: ${table.tableNumber} - Capacity: ${table.capacity}`}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRestaurant;
