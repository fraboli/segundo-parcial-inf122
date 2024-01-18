import React from "react";
import "../style/estado.css";

function Estado({setContar}) {
    return (
        <div className="estado-container">
            <p className="completo">completadas:</p>
            <p className="pendiente">pendientes:{setContar}</p>
        </div>
    );
}

export default Estado;
