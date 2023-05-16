import useFetch from "../../hooks/useFetch";
import "./featuredRestaurants.css";
import { RaceBy } from "@uiball/loaders";

const FeaturedRestaurants = () => {
  const { data, loading, error } = useFetch(
    "https://e7gez-be.onrender.com/api/restaurants?featured=true&limit=4"
  );
  return (
    <div className="fr">
      {loading ? (
        <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
      ) : (
        <>
          {data.map((item) => (
            <div className="frItem" key ={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="frImg"
              />
              <span className="frImg">{item.name}</span>
              <span className="frCity">{item.city}</span>
              <span className="frPrice">Reservation fee: {item.price} LE</span>
             { item.rating && <div className="frRating">
                <button>{item.rating}</button>
                <span>Great</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedRestaurants;
