    // <!--Food-->
// import "./food.css"
import "./food.css"
// import "./food_new.css"
import pasta from "../image/pasta.jpg"
import burger from "../image/buger.jpg"

const Food =()=>
{

    return (
<>





    <div className="menu" id="Menu">
        <h1><span>Food</span></h1>

        <div className="menu_box">


            <div className="menu_card">

                <div className="menu_image">
                    <a href="pastainner.html"><img className="images" alt=" " src={pasta}/></a>
                </div>


                <div className="menu_info">
                    <h2>Pasta</h2>
                    

                </div>

            </div>





            <div className="menu_card">

                <div className="menu_image">
                    <a href="burgerinner.html"><img className="images" alt=" " src={burger}/></a>
                </div>


                <div className="menu_info">
                    <h2>Burger</h2>
                   

                </div>

            </div>

            <div className="menu_card">

                <div className="menu_image">
                    <a href="hotdoginner.html"><img className="images" alt=" " src={require("../image/Hot_dog.jpg")}/></a>
                </div>


                <div className="menu_info">
                    <h2>Hot Dog</h2>
                  
                   

                </div>

            </div>

            <div className="menu_card">

                <div className="menu_image">
                    <a href="chowmien.html"><img className="images" alt=" " src={require("../image/Chowmien1.jpg")}/></a>
                </div>


                <div className="menu_info">
                    <h2>Chowmien</h2>
                   
                   

                </div>

            </div>

        </div>

    </div>
</>

    )
    
}

export default Food ;