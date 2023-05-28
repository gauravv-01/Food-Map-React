import "./team.css"

const Team = ()=>
{
    return(
        <>
            {/* <!--Team--> */}

<div className="team">
    <h1>Our<span>Team</span></h1>

    <div className="team_box">
        <div className="profile">
            <img src={require("../image/gav.jpg")} alt=""/>

            <div className="info">
                <h2 className="name">Gaurav</h2>
                <p className="bio">Team Leader</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src={require("../image/kar.jpg")} alt="" />

            <div className="info">
                <h2 className="name">Karan</h2>
                <p className="bio">Fronted Developer</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src={require("../image/khu.jpg")} alt=""/>

            <div className="info">
                <h2 className="name">Khushi</h2>
                <p className="bio">Frontend Developer</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src={require("../image/dev.jpg")} alt=""/>

            <div className="info">
                <h2 className="name">Devansh</h2>
                <p className="bio">Backend Developer</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

        <div className="profile">
            <img src={require("../image/nakti.jfif") } alt="" />

            <div className="info">
                <h2 className="name">Anshika</h2>
                <p className="bio">Backend Developer</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>


        <div className="profile">
            <img src={require("../image/aj.jfif")} alt="" />

            <div className="info">
                <h2 className="name">Ajay</h2>
                <p className="bio">UI/UX Designer</p>

                <div className="team_icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

            </div>

        </div>

    </div>

</div>

        </>
    )
}

export default Team;