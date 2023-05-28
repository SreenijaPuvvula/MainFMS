import React from "react";
import MainHeading from "../Admin/MainHeading";
import "./Home.css";
import ControlledCarousel from "./Carousel";
import NavBar from "./NavBar";
import Footer from "./Footer";


function Home() {
    const style = { fontSize: "20px", fontWeight: "500", color: "#002333" }
    return (
        <>
            <MainHeading />
            <NavBar />
            <p className="homeInfo">
                The Cherabuddi Education Society was registered in January 1999 as an NRI-promoted society.
                The Society  aims at creating a state-of-the-art engineering institution in association with leading NRI
                technology professionals and well-known academicians of the twin states of Telangana & Andhra Pradesh.
                The Society aims to harness technical excellence with a commitment to the ethos of 'useful learning'.
            </p>
            <ControlledCarousel />
            <div className="homeInfo" style={{ margin: "0 25% 2% 25%" }}>
                <h2>Vision of the Institute</h2>
                <p>To be a state of the art institution of engineering in pursuit of excellence, in the service of society.</p>
                <h2>Mission of the Institute</h2>
                <p>To excel in providing quality education at under graduate and graduate levels.
                    To encourage research and innovation.
                    To provide infrastructure and facilities to meet the latest technological needs.
                    To establish Centres of Excellence through active interaction with industry.
                    To nurture students towards holistic development with human values and ethics.
                </p>
            </div>
            <div className="mainbody homeInfo" m-4 p-4>
                <div className="bodyshape">
                    <div className="col-lg-4" ><h2><u>Chairman</u></h2>
                        <img src="images/chairman.jpg" alt="Chairman" className="image" /> <br /><br />
                        <span style={style}>Dr. Cherabuddi Raghava</span>
                        <div >Chairman, Professor <br />M.S, Ph.D(CSE)<br /></div><br />
                    </div>
                    <div className="col-lg-4"><h2 ><u>Principal</u></h2>
                        <img src="images/principal.jpg" alt="Principal" className="image" /> <br /><br />
                        <span style={style}>Dr. K Ram Mohan Reddy</span>
                        <div >Principal<br />B Tech(Civil), Ph.D<br /></div><br />
                    </div>
                    <div className="col-lg-4"><h2 > <u>Vice Principal</u></h2>
                        <img src="images/vc.jpg" alt="Vice Principal" className="image" /> <br /><br />
                        <span style={style}>Prof. L C Siva Reddy</span>
                        <div >Prof. & Vice Principal<br />M.Phil(CN)<br /></div><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;