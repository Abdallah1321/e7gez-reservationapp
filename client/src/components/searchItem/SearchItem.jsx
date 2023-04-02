import "./searchItem.css";
import { Link, useNavigate } from "react-router-dom";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siAddress">
          {item.city}, {item.address}
        </span>
        <span className="siSubtitle">{item.type}</span>
        <span className="siDescription">{item.description}</span>
        <span className="siCancel">Free Cancellation</span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Great!</span>
            <button>{item.rating}</button>
          </div>
        )}
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">
          LE {item.price} <small>per person</small>
        </span>
        <span className="siPriceNote">Does not include menu orders</span>
        <Link to={`/restaurants/${item._id}`}>
          <button className="siCheckButton">Check for tables</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchItem;
