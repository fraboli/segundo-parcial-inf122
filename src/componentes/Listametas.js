import React,{useState} from "react";
import "../style/ListaMeta.css";
function Listametas({ setMeta}) {
    return (
        <div className="list-container" id="list">
            <p >{setMeta}</p>
        </div>
    );
}
export default Listametas;