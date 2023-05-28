import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
    const navigate = useNavigate();
    function navigatePage(event) {
        event.preventDefault();
        navigate("/login");
    }
    const dropDownMenuCSS = { backgroundColor: "#ced5dd", borderTopRightRadius: 0, borderTopLeftRadius: 0 }

    return (
        <nav className="navbar navbar-expand-lg" style={{ padding: 0, position: "static" }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01" aria-expanded="false">
                <ul className="navbar-nav listItems">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" name="home" style={{ marginLeft: "20px" }}><span className="navItem">Home</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="navItem">Departments</span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={dropDownMenuCSS} >
                            <Link class="dropdown-item dropItem" to="/departments" state={"cse"} style={{ color: "rgb(60,60,60)" }}>CSE</Link>
                            <Link class="dropdown-item dropItem" to="/departments" state={"it"} style={{ color: "rgb(60,60,60)" }}>IT</Link>
                            <Link class="dropdown-item dropItem" to="/departments" state={"ece"} style={{ color: "rgb(60,60,60)" }}>ECE</Link>
                            <Link class="dropdown-item dropItem" to="/departments" state={"mech"} style={{ color: "rgb(60,60,60)" }}>MECH</Link>
                            <Link class="dropdown-item dropItem" to="/departments" state={"civil"} style={{ color: "rgb(60,60,60)" }}>CIVIL</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contact" name="contact"><span className="navItem">Contact us</span></Link>
                    </li>

                    <li>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn" id="login" type="submit" onClick={navigatePage}>Login</button>
                        </form>
                    </li>

                </ul>

            </div>
        </nav>);

}
export default NavBar;