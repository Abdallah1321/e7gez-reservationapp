import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>New Cairo</h1>
                <h2>87 restaurants</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Zamalek</h1>
                <h2>122 restaurants</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Nasr City</h1>
                <h2>187 restaurants</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured