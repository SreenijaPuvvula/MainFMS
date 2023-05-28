import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Papa from 'papaparse';
import "./styles.css";

function MenuBar() {

    const [parsedData, setParsedData] = useState({});

    const handleFile = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setParsedData({ csvData: results.data });
            },
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        axios({
            url: 'http://localhost:3000/api/upload',
            method: 'POST',
            data: parsedData
        }).then((res) => {
            alert(res.data);
            console.log("Submitted");

        }).catch((res) => {
            console.log("Error");
            alert("Select a file first !!");
        })
    }

    return (
        <div className="menuBar">
            <div className="menuItem">
                <Link to="/">Home</Link>
            </div>
            <div className="menuItem">
                <Link to="/addFaculty">Add Faculty</Link>
            </div>
            <div className="menuItem">
                <label for="csvFile">Upload Csv File</label>
                <input type="file" id="fileUploader" name="csvFile" onChange={handleFile} accept=".csv" required />
                <button type="submit" onClick={handleSubmit} className="uploadBtn">Upload</button>
            </div>
        </div>
    )
}
export default MenuBar;