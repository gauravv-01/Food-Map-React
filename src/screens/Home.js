// import "./App.css"
import "../style.css";
// import Faltu from "./components/Faltu";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Food from "../components/Food";
import FoodsNearYou from "../components/FoodsNearYou";
import RestaurantsNearYou from "../components/RestaurantsNearYou";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import Footer from "../components/Footer";
// import NavBarr from "./Navbarr";

const Home=()=>
{
  return(
    <>  

        <div className="container1">

        <NavBar/>
        </div>
        <div className="container2">
        <Search/>

        </div>
        <div className="container3">
        <Food/>

        </div>
        <div className="container4">
        <FoodsNearYou/>
        

        </div>
        <div className="container5">
        <RestaurantsNearYou/>
        

        </div>

        <div className="container6">
        <AboutUs/>
        </div>

        <div className="container7">
        <Team/>
        </div>

        <div className="container8">
        <Footer/>
        </div>

    </>
  )
}

export default Home;