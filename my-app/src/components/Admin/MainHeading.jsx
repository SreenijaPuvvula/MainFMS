import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function MainHeading() {
    return (
        <nav className="navbar header">
            <div className="container-fluid">
                <Link className="navbar-brand " to="/">
                    <img src="./images/cvrLogo.png" alt="cvrLogo" className="cvrLogo" />
                    <span className="brand">CVR COLLEGE OF ENGINEERING</span>
                </Link>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2 searchBar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search" />
                    <button className="btn btn-outline-secondary " style={{padding:"3.1px 8px 3.1px 8px"}} type="submit">
                        <i className="bi bi-search" style={{color:"#b4bec9"}}></i>
                    </button>
                </form>
            </div>
        </nav>
    )
}
export default MainHeading;