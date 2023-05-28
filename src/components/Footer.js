import "./footer.css"

const Footer = () => {
    return (
        <>
            {/* <!--Footer--> */}

            <footer>
                <div class="footer_main">

                    <div class="footer_tag">
                        <h2>Restaurant</h2>
                        <p>Jaipur</p>
                        <p>Dudu</p>
                        <p>Ajmer</p>
                        <p>Udaipur</p>
                        <p>Jodhpur</p>
                    </div>

                    <div class="footer_tag">
                        <h2>Quick Link</h2>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Gallary</p>
                    </div>

                    <div class="footer_tag">
                        <h2>Contact</h2>
                        <p>+91 9116967168</p>
                        <p>+91 6378441362</p>
                        <p>+91 8826125104</p>
                        {/* <!-- <p>+91 80587743374</p>
                        <p>+91 7999934702</p>
                        <p>+91 774230973</p> --> */}
                        <p>gauravkumawat19earcs047@gmail.com</p>
                        <p>ajaydayma4466@gmail.com</p>
                    </div>

                    <div class="footer_tag">
                        <h2>Our Service</h2>
                        <p>Food Filtering</p>
                        <p>Earn Points</p>
                        <p>Redeem Points</p>
                    </div>

                    <div class="footer_tag">
                        <h2>Follows</h2>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                </div>

                <p class="end">Design by<span><i class="fa-solid fa-face-grin"></i> Prudent Slyares</span></p>

            </footer>

        </>
    )
}

export default Footer;