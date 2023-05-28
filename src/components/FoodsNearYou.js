import "./foodsnearyou.css";

const FoodsNearYou = () => {
    return (
        <>
            {/* <!--Food's Near You--> */}

            <div className="food" id="food">

                <div className="nearfood" id="nearfood">
                    <h1><span>Food's Near You</span><div>
                        <button type="button" onclick="document.location='menu_foodsnearyou.html'">View all</button>
                    </div></h1>

                    <div className="nearfood_box">
                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <a href="blankpage.html"><img alt=" " src={require("../image/burger1.jpg")}/></a>
                            </div>



                            <div className="nearfood_info">
                                <h2>Cheeseburger</h2>
                                <h3>Burger farm</h3>
                                <p>
                                    50% off up to 100
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>

                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/Chowmien1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Fried</h2>
                                <h3>Skyza</h3>
                                <p>
                                    40% off up to one
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">3.9</a> --> */}
                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/pizza1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Doinos Pizza</h2>
                                <h3>Domino's</h3>
                                <p>
                                    45% off up to one
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">3.8</a> --> */}
                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/pasta1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Masala Pasta</h2>
                                <h3>FPF coffee wale</h3>
                                <p>
                                    30% off up to one
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">4.2</a> --> */}
                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/sandwich1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Chees Sandwich</h2>
                                <h3>Sharma Store</h3>
                                <p>
                                    55% off up to one
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">4.3</a> --> */}
                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/hot_dog1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Corn Dog</h2>
                                <h3>Royal Backery</h3>
                                <p>
                                    60% off up to two
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">3.7</a> --> */}
                            </div>

                        </div>

                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/momos1.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Fried Veg</h2>
                                <h3>Pankaj Momos</h3>
                                <p>
                                    50% off up to one
                                </p>
                                <h3> &#8377; 150 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">3.9</a> --> */}
                            </div>

                        </div>


                        <div className="nearfood_card">

                            <div className="nearfood_image">
                                <img alt=" " src={require("../image/burger8.jpg")}/>
                            </div>



                            <div className="nearfood_info">
                                <h2>Onion Burger</h2>
                                <h3>Rominous</h3>
                                <p>
                                    50% off up to
                                </p>
                                <h3> &#8377; 99 for one</h3>
                                <div className="nearfood_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                {/* <!-- <a href="#" className="nearfood_btn">4.0</a> --> */}
                            </div>

                        </div>




                    </div>

                </div>
            </div>


        </>
    )
}

export default FoodsNearYou;