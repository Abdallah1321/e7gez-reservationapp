import useFetch from "../../hooks/useFetch";
import "./cuisineList.css";
import { RaceBy } from "@uiball/loaders";

const CuisineList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/restaurants/countByType"
  );
  const images = [
    "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
    "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1438401817917-ee9dc33fe6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  ];
  return (
    <div className="cList">
      {loading ? (
        <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="cListItem">
                <img src={img} alt="" className="cListImg" />
                <div className="cListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2> {data[i]?.count} restaurants</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default CuisineList;
