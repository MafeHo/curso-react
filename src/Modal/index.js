import React from "react";
import ReactDOM from "react-dom";
import './modal.css';
//import { createPortal } from "react-dom";

function Modal ({ children }) {
    return ReactDOM.createPortal(
        //aqui se le agrega la clase para que tengamos teletransportación de un nodo a otro y ese nodo este abajo, sino que se pueda estilizar de alguna forma para que este nodo aparezca por encima del otro
        //aqui debemos enviar qué contenido queremos teletransportar
        <div className="ModalBackground"> 
            {children}
        </div>,
        document.getElementById('modal') // aquí se debe enviar el id del nodo al que queremos teletransportar el contenido en html
    );
}

export { Modal };


