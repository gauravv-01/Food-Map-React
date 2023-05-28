import "./navbar.css";
// import React from "react";
import logo_img from "../image/logo.png"

const NavBar =()=>
{
    return(
        
        <section id="Home">
        <nav>
            <div class="logo">
                <img src={logo_img} alt=""/>
            </div>

            <ul>
                {/* <!-- <li><a href="#Home">Home</a></li> --> */}

                <li><a href="#Menu">Food</a></li>
                <li><a href="#food">Food's Near You</a></li>
                <li><a href="#restaurant">Restaurant Near You</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="login_signup.html">Login</a></li>
                <li><input type="text" list="input_1" placeholder="Choose location"/></li>

            </ul>

        </nav>
        <datalist id="input_1">
            <option value="Jaipur"></option>
            <option value="Jodhpur"></option>
            <option value="Dudu"></option>
            <option value="Ajmer"></option>
            <option value="Udaipur"></option>

        </datalist>





    </section>
    
        


      
    )



}


export default NavBar;