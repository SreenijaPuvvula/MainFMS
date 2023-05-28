import React from "react";
import Home from "./components/Home/Home.jsx";
import "./components/Admin/styles.css";
import Admin from "./components/Admin/Admin.jsx";
import Login from "./components/Login/Login.jsx";
import Departments from "./components/NavBarItems/Departments.jsx";
import About from "./components/NavBarItems/About.jsx";
import Contact from "./components/NavBarItems/Contact.jsx";
import FacultyDetails from "./components/Add_Faculty/FacultyDetails.jsx";
import PersonalProfile from "./components/PeronalFacultyProfile.jsx/PersonalProfile.jsx";
import Update from "./components/UpdateFaculty/Update.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/addFaculty" element={<FacultyDetails />} />
                    <Route path="/personalProfile" element={<PersonalProfile />} />
                    <Route path="/personalProfile/:id" element={<PersonalProfile />} />
                    <Route path="/updateFaculty" element={<Update />} />
                    <Route path="/updateFaculty/:id" element={<Update />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default App;
