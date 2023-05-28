import React from "react";
import axios from "axios";
import "../Add_Faculty/Add.css";
import { useNavigate, useParams } from "react-router-dom";   
import { useEffect, useState } from "react";

function Update() {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:8080/api/getFacultyDetails/${id}`)
        .then(response=> setData(response.data))
        .catch(error=> console.log(error))
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        console.log(data);
        axios.put(`http://localhost:8080/api/putFaculty/${id}`, data)
        .then(res => {
            alert("Updation Success!");
            navigate("/admin");
        })
        .catch(err => {console.error("Error : ",err)});

    }

   

    return (
        <>
            <img src="https://www.transparenttextures.com/patterns/inspiration-geometry.png" className="formBg" alt="background" />
            {/* <CreateUpdateForm details={facultyDetails}  /> */}
            
            <form className="row needs-validation mx-auto p-2 formDiv" onSubmit={handleSubmit}>
            <legend style={{textAlign:"center"}}>Update Faculty Details</legend>
                <div class="form-group formItem">
                    <label  class="form-label">Faculty ID</label>
                    <div class="input-group has-validation">
                        <input type='text' disabled value={data.fid} className="form-control" name="fid"
                          />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Faculty Name</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.facultyName} className="form-control"  name="facultyName"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Father's Name</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.fatherName} className="form-control"  name="fatherName"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Mother's Name</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.motherName} className="form-control"  name="motherName"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Age</label>
                    <div class="input-group has-validation">
                        <input type='number' value={data.age} className="form-control"  name="age"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Gender</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.gender} className="form-control"  name="gender"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Education</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.education} className="form-control"  name="education"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Designation</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.designation} className="form-control"  name="designation"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Department</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.department} className="form-control"  name="department"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Date Of Join</label>
                    <div class="input-group has-validation">
                        <input type='date' disabled value={data.doj} className="form-control"  name="doj"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Experience</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.experience} className="form-control"  name="experience"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Aadhar Number</label>
                    <div class="input-group has-validation">
                        <input type='number' value={data.aadhar} className="form-control"  name="aadhar"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Pan Number</label>
                    <div class="input-group has-validation">
                        <input type='text' value={data.pan} className="form-control"  name="pan"
                            onChange={e => setData({...data, [e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Mobile Number</label>
                    <div class="input-group has-validation">
                        <input type='number' value={data.mobile} className="form-control"  name="mobile"
                            onChange={e => setData({...data,[e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="form-group formItem">
                    <label  class="form-label">Email ID</label>
                    <div class="input-group has-validation">
                        <input type='email' value={data.email} className="form-control"  name="email"
                            onChange={e => setData({...data,[e.target.name]: e.target.value})}
                        />
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-secondary submitBtn" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default Update;