import "./cuisineList.css"

const CuisineList = () => {
  return (
    <div className="cList">
        <div className="cListItem">
            <img src="https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80" alt="" className="cListImg" />
            <div className="cListTitles">
                <h1>Fine Dining</h1>
                <h2>12 restaurants</h2>
            </div>
        </div>
        <div className="cListItem">
            <img src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cListImg" />
            <div className="cListTitles">
                <h1>Fast Food</h1>
                <h2>30 restaurants</h2>
            </div>
        </div>
        <div className="cListItem">
            <img src="https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cListImg" />
            <div className="cListTitles">
                <h1>Oriental</h1>
                <h2>19 restaurants</h2>
            </div>
        </div>
        <div className="cListItem">
            <img src="https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="cListImg" />
            <div className="cListTitles">
                <h1>Seafood</h1>
                <h2>8 restaurants</h2>
            </div>
        </div>
        <div className="cListItem">
            <img src="https://images.unsplash.com/photo-1438401817917-ee9dc33fe6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80" alt="" className="cListImg" />
            <div className="cListTitles">
                <h1>Breakfast</h1>
                <h2>15 restaurants</h2>
            </div>
        </div>
    </div>
  )
}

export default CuisineList