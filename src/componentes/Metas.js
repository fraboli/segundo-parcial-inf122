import React, { useState } from "react";
import "../style/Meta.css";
import Estado from "./Estado";
import Listametas from "./Listametas";

function Metas() {
    const [contar, setContar] = useState(0);
    const [meta, setMeta] = useState("");

    const agregarMeta = () => {
        setContar(contar + 1);
    };

    const textoMeta = (event) => {
        setMeta(event.target.value);
    };

    return (
        <div>
            <h1>Mis metas</h1>
            <div className="metas-conteiner">
                <input
                    type="text"
                    placeholder="Nueva meta..."
                    id="textometa"
                    value={meta}
                    onChange={textoMeta}
                />
                <button onClick={agregarMeta}>Agregar</button>
            </div>
            <br />
            <div>
                <Estado setContar={contar} />
            </div>
            <div>
                <Listametas setMeta={textoMeta}/>
            </div>
        </div>
    );
}

export default Metas;
