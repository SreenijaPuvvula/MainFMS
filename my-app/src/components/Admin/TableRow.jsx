import React, { useState } from "react";
import tableInfo from "./tableInfo";
import "./styles.css";
import CreateRow from "./CreateRow";


function TableRow() {

    const [info, setTableInfo] = useState(tableInfo);
    
    //getting index from the createRow component and removing the row using index;
    function deleteRow(id) {
        setTableInfo((prevRows) => {
            return prevRows.filter((selectedRow, index) => {
                return index !== id;
            })
        })
    }

    return (
        <tbody>
            {info.map((tableItem, index) => {
                return (
                    <CreateRow ind={index} tableRow={tableItem} onDelete={deleteRow} key={tableItem.id} />
                )
            })}
        </tbody>
    )
}
export default TableRow;
