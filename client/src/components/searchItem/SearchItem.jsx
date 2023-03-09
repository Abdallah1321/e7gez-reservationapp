import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1553443175-e1ce8896d8f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Thai Restaurant</h1>
        <span className="siAddress">90 Street, Concord Plaza</span>
        <span className="siSubtitle">Asian</span>
        <span className="siDescription">
          One of the Asian restaurants in Egypt
        </span>
        <span className="siCancel">Free Cancellation</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Great!</span>
          <button>7.8</button>
        </div>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">
          LE 100 <small>per person</small>
        </span>
        <span className="siPriceNote">Does not include menu orders</span>
        <button className="siCheckButton">Check for tables</button>
      </div>
    </div>
  );
};

export default SearchItem;
