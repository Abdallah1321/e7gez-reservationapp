import CuisineList from '../../components/cuisineList/CuisineList.jsx'
import EmailList from '../../components/emailList/EmailList.jsx'
import Featured from '../../components/featured/Featured.jsx'
import FeaturedRestaurants from '../../components/featuredRestaurants/FeaturedRestaurants.jsx'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Pick Your Cuisine!</h1>
                <CuisineList />
                <h1 className="homeTitle">Customer favourites!</h1>
                <FeaturedRestaurants />
                <EmailList/>
            </div>
        </div>
    )
}

export default Home