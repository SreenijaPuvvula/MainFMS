import React from "react";
import CreateForm from "./createForm";
import axios from "axios";

function FacultyDetails() {


    const facultyDetails = [
        { label: "Faculty ID", type: "text", name: "fid" },
        { label: "Faculty Name", type: "text", name: "facultyName" },
        { label: "Father’s Name", type: "text", name: "fatherName" },
        { label: "Mother’s Name", type: "text", name: "motherName" },
        { label: "Age", type: "number", name: "age" },
        { label: "Gender", type: "text", name: "gender" },
        { label: "Education", type: "text", name: "education" },
        { label: "Designtion", type: "text", name: "designation" },
        { label: "Department", type: "text", name: "department" },
        { label: "Date Of Join", type: "date", name: "doj" },
        { label: "Years Of Experience", type: "number", name: "experience" },
        { label: "Aadhar Number", type: "number", name: "aadhar" },
        { label: "Pan Number", type: "text", name: "pan" },
        { label: "Mobile no", type: "number", name: "mobile" },
        { label: "Email ID", type: "email", name: "email" },
        { label: "Upload Faculty Image", type: "file", name: "facultyImage" }
    ]



    return (
        <>
            <img src="https://www.transparenttextures.com/patterns/inspiration-geometry.png" className="formBg" alt="background" />
            <CreateForm details={facultyDetails}  />
        </>
    )
}
export default FacultyDetails;