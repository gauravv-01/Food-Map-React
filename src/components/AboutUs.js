import "./aboutus.css"


const AboutUs = () => {

    return (
        <>
            {/* <!-- About Us --> */}
            <div className="about" id="About">
            <div style={{display:"flex"}}>
                <h1 ><span>About</span></h1>
                <h1>Us</h1>

            </div>
                <div className="about_main">

                    <div className="image_container">
                        <img src={require("../image/Food-Plate.png")} alt=" "/>
                    </div>
                

                    <div className="about_text">
                        <h3>Why Choose us?</h3>
                        <p>
                            In the increasing market of restaurants and cafes, we see that people are more attracted to them and
                            spend a lot of money but don’t get that perfect taste for everything. There are many people who
                            adore local street food shops, or the people who travel want to explore the food options of a
                            particular place, and to do so going to huge restaurants or cafes won’t help. They can do that if
                            they know about the local food shops in a particular region and the food items in which they are
                            best.
                        </p>
                    </div>

                </div>

                {/* <!-- <a href="#" className="about_btn">Order Now</a> --> */}

            </div>


        </>
    )
}

export default AboutUs;