import React, { useState } from "react";
import "./Add.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateForm(props) {

    const [object, setObject] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event) {
        console.log(object);
        console.log("----------")
        console.log(object.facultyImage)
        event.preventDefault();
        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: object
        })
            .then((res) => {
                alert(res.data);
                console.log("Data has been sent to the server");
            })
            .catch((err) => {
                console.log(err);
            });
        navigate("/admin");
    }

    function handleChange(event) {
        console.log(event.target);
        setObject({ ...object, [event.target.name]: event.target.value });
    }



    function createInput(info, index) {
        return (

            <div class="form-group formItem" key={index}>
                <label for="validationCustomUsername" class="form-label">{info.label}</label>
                <div class="input-group has-validation">
                    <input type={info.type} className="form-control" id="validationCustomUsername" name={info.name} onChange={handleChange} value={object.name} />
                </div>
            </div>
        )
    }

    return (
        <form className="row needs-validation mx-auto p-2 formDiv" onSubmit={handleSubmit} novalidate>
            <legend>Faculty Details</legend>
            <div >
                {props.details.map(createInput)}
            </div>
            <div class="col-12">
                <button class="btn btn-secondary submitBtn" type="submit">Submit</button>
            </div>
        </form>
    )
}
export default CreateForm;






  // function handleRadioItems(item) {
        //     return (
        //         <div class="form-check form-check-inline formItem">
        //             <input class="form-check-input " type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
        //             <label class="form-check-label " for="exampleRadios1">{item}</label>
        //         </div>
        //     )
        // }
        // else if (info.type === "radio") {
        //     return (
        //         <>
        //             <div className="formRadioItem">
        //                 <label for="formGroupExampleInput">{info.label}</label>
        //             </div>
        //             {info.radioItems.map(handleRadioItems)}
        //         </>
        //     )
        // }


