import React from "react";
import MainHeading from "../Admin/MainHeading";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import "./navItem.css";
function Contact() {
    return (
        <>
            <MainHeading />
            <NavBar />
            <div className="contact">
                <div className="contactItem">
                    <h5>Campus:</h5>
                    <p>
                        CVR College Of Engineering,
                        Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),
                        Rangareddy (D), Telangana 501 510
                    </p>
                    <div >
                        <Link to=" https://www.google.com/maps/place/CVR+College+Of+Engineering/@17.1961632,78.5972361,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba659868b4727:0xf39a771705e23170!8m2!3d17.1961632!4d78.5972361!16s%2Fm%2F080kssr" className="mapLink">Google maps location</Link>
                    </div>
                </div>




                <div className="contactItem">
                    <h5>City Office:</h5>
                    <p>
                        #201 & 202, Ashoka Scintilla,
                        above Mebaz and opp. Malabar Gold & Diamonds,
                        Himayat Nagar,
                        Hyderabad, Telangana 500 029
                    </p>
                    <div >
                        <Link to="https://www.google.com/maps/place/Ashoka+Scintilla,+Himayat+Nagar+Rd,+Sai+Vihar,+Advocates+Colony,+Himayatnagar,+Hyderabad,+Telangana+500029,+India/@17.4021242,78.4825297,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb99dd1bddfa13:0x78b21c3c18ac3517!8m2!3d17.4021435!4d78.4847622?shorturl=1" className="mapLink">Google maps location</Link>
                    </div>
                </div>

                <div className="contactItem">
                    <h5>Call:</h5>
                    <div>
                        099598 34090 (NOT for placements related. For placements related, call 08414 661663)
                    </div>
                    <p>Landline: +91 84146 61602, 084146 61601</p>
                </div>


                <div className="contactItem">
                    <h5>E-mail:</h5>
                    <div>
                        <p>For general enquiries: principal@cvr.ac.in</p>
                        <p>For admissions related enquiries: snreddy@cvr.ac.in</p>
                        <p>For placements related enquiries: placement@cvr.ac.in</p>
                    </div>

                </div>


                <div className="contactItem">
                    <h5>Contact us on:</h5>
                    <div className="socialIcons">
                        <a href="https://twitter.com/cvrcoenews?lang=en"><i class="bi bi-twitter" ></i></a>
                        <a href="https://www.facebook.com/cvr.coe/"><i class="bi bi-facebook" ></i></a>
                        <a href="https://www.instagram.com/cvr_community/?hl=en"><i class="bi bi-instagram" ></i></a>
                        <a href="https://in.linkedin.com/school/cvrcoe/"><i class="bi bi-linkedin" ></i></a>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )

}
export default Contact;