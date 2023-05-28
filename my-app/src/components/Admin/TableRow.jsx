import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import CreateRow from "./CreateRow";


function TableRow() {

    const [tableInfo, setTableInfo] = useState([]);

    function deleteRow(fid) {
        setTableInfo((prevRows) => {
            return prevRows.filter((selectedRow, index) => {
                return selectedRow.fid !== fid;
            })
        })
    }

    useEffect(() => {
        getAllTableInfo()
    }, [])

    const getAllTableInfo = () => {
        axios
            .get('http://localhost:8080/api/getFacultyDetails')
            .then((response) => {
                setTableInfo(response.data);
            })
            .catch((error) => {
                console.log('Error');
                console.log(error);
            })
    }

    return (
        <tbody name='tbody'>
            {tableInfo.map((tableItem, index) => {
                console.log(tableItem);
                return (
                    <CreateRow ind={index} tableRow={tableItem} key={tableItem.id} onDelete={deleteRow} />
                )
            })}
        </tbody>
    )
}
export default TableRow;

