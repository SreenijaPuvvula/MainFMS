import React, { useState } from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";

function CreateForm(props) {

    const [object, setObject] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        props.parentCallback(object);
        alert("Data Submitted Successfully");
        navigate("/admin");
    }

    function handleChange(event) {
        const temp = event.target.value;
        setObject({ ...object, [event.target.name]: temp });
    }



    function createInput(info, index) {
        return (
            <div class="form-group formItem" key={index}>
                <label for="validationCustomUsername" class="form-label">{info.label}</label>
                <div class="input-group has-validation">
                    <input type={info.type} className="form-control" id="validationCustomUsername" name={info.name} onChange={handleChange} value={object.name} required />
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
                <button class="btn btn-secondary submitBtn" type="submit" >Submit</button>
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


