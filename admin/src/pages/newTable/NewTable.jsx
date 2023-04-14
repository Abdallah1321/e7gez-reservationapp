import "./newTable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { tableInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewTable = () => {
  const [info, setInfo] = useState({});
  const [restaurantId, setRestaurantId] = useState(undefined);

  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/restaurants"
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e)=>{
    e.preventDefault()
    try{
      await axios.post(`http://localhost:8800/api/tables/${restaurantId}`, {...info})
      navigate("/tables");
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Table</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {tableInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
                <div className="formInput">
                  <label>Choose a Restaurant</label>
                  <select id="restaurantId" onChange={e=>setRestaurantId(e.target.value)}>
                    {loading ? "loading" : data && data.map(restaurant=>(
                      <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>
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

export default NewTable;
