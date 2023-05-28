import React, { useEffect, useState } from "react";
import "./profile.css";
import additionalInfo from "./additionalInfo";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function PersonalProfile() {

    const r = useParams();
    const location = useLocation();
    const facultyInfo = location.state;
    const [facultyData, setFacultyData] = useState({});
    console.log(r)

    useEffect(() => {
        if (Object.entries(r).length !== 0) {
            axios.post('http://localhost:8080/api/getFacultyProfile', {
                facID: r.id
            })
                .then((res) => {
                    console.log("in axios then")
                    setFacultyData(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            setFacultyData(facultyInfo)
        }
    }, [])

    function handleLegend(item1, item2) {
        if (item1 !== "legend") {
            return (item1);
        }
        else {
            return (
                <h2>{item2}</h2>
            )
        }
    }

    function handleLegendValue(item1, item2) {
        if (item1 === "legend") {
            return "";
        }
        else {
            return item2;
        }
    }
    function handleColon(item1, item2) {
        if (item1 === "legend") {
            return "";
        }
        else {
            return ":";
        }
    }

    function handleAdditonalInfo(props) {
        let entries = Object.entries(props);
        console.log(entries)
        return (
            entries.map((item) => {
                return (
                    <div >
                        <label>{handleLegend(item[0], item[1])}</label>
                        <span>{handleColon(item[0], item[1])}</span>
                        <span> {handleLegendValue(item[0], item[1])}</span>
                    </div>
                )
            }))
    }

    return (
        <div>
            <img className="facultyProfilePage" alt="" />
            <form className="facultyContainer">
                <div className="imgContainer" >

                    <img src="" alt="" className="facultyImg" />
                    <div >
                        <h2 >{facultyData.facultyName}</h2>
                    </div>
                </div>
                <div className="facultyInfoContainer">
                    <div>
                        <label>FacultyID   </label>
                        <span>:</span>
                        <span> {facultyData.fid}</span>
                    </div>

                    <div>
                        <label>Gender </label>
                        <span>:</span>
                        <span> {facultyData.gender}</span>
                    </div>
                    <div>
                        <label>Date Of Join  </label>
                        <span>:</span>
                        <span> {facultyData.doj}</span>
                    </div>
                    <div>
                        <label>Age  </label>
                        <span>:</span>
                        <span> {facultyData.age}</span>
                    </div>
                    <div>
                        <label>Department  </label>
                        <span>:</span>
                        <span> {facultyData.department}</span>
                    </div>
                    <div>
                        <label>Designation  </label>
                        <span>:</span>
                        <span> {facultyData.designation}</span>
                    </div>
                    <div>
                        <label>Education  </label>
                        <span>:</span>
                        <span> {facultyData.education}</span>
                    </div>
                    <div>
                        <label>Email  </label>
                        <span>:</span>
                        <span> {facultyData.email}</span>
                    </div>
                    <div>
                        <label>Mobile  </label>
                        <span>:</span>
                        <span> {facultyData.mobile}</span>
                    </div>
                    <div>
                        <label>Experience  </label>
                        <span>:</span>
                        <span> {facultyData.experience}</span>
                    </div>
                </div>
                <div className="facultyInfoContainer">
                    {additionalInfo.map(handleAdditonalInfo)}
                </div>

            </form>
        </div>
    )
}
export default PersonalProfile;



// function handleLegendValue(item1, item2) {
//     if (item1 === "legend") {
//         return "";
//     }
//     else {
//         return item2;
//     }
// }
// function handleColon(item1, item2) {
//     if (item1 === "legend") {
//         return "";
//     }
//     else {
//         return ":";
//     }
// }

// function createContainer(props) {
//     console.log(props)
//     console.log(" ");
//     let entries = Object.entries(props);
//     console.log(entries)
//     return (
//         entries.map((item) => {
//             return (+
//                 <div>
//                     <label>{handleLegend(item[0], item[1])}</label>
//                     <span>{handleColon(item[0], item[1])}</span>
//                     <span> {handleLegendValue(item[0], item[1])}</span>
//                 </div>
//             )
//         }))
// }
{/* <div>
<img className="facultyProfilePage" />
<form className="facultyContainer">
    <div className="imgContainer" >
        <img src={data.img} alt="" className="facultyImg" />
        <div >
            <h2 >{data.facultyName}</h2>
        </div>
    </div>
    <div className="facultyInfoContainer">

        <div>
            <label>FacultyID   </label>
            <span>:</span>
            <span> {data.id}</span>
        </div>

        <div>
            <label>Gender </label>
            <span>:</span>
            <span> {data.gender}</span>
        </div>
        <div>
            <label>Date Of Join  </label>
            <span>:</span>
            <span> {data.dateOfJoin}</span>
        </div>
        <div>
            <label>Age  </label>
            <span>:</span>
            <span> {data.age}</span>
        </div>
        <div>
            <label>Department  </label>
            <span>:</span>
            <span> {data.department}</span>
        </div>
        <div>
            <label>Designation  </label>
            <span>:</span>
            <span> {data.designation}</span>
        </div>
        <div>
            <label>Education  </label>
            <span>:</span>
            <span> {data.education}</span>
        </div>
        <div>
            <label>Email  </label>
            <span>:</span>
            <span> {data.email}</span>
        </div>
        <div>
            <label>Mobile  </label>
            <span>:</span>
            <span> {data.phno}</span>
        </div>
        <div>
            <label>Experience  </label>
            <span>:</span>
            <span> {data.experience}</span>
        </div>
        {additionalInfo.map(createContainer)}
    </div>
</form>
</div> */}