import React from "react";
import "./createTodoButton.css"

const onClickButton = (mensaje) => {
    alert(mensaje);
}

function CreateTodoButton(){
    return(
        <button className="CreateTodoButton"
        onClick={()=> onClickButton('Aqui se ejecuta el modal')}>
            +
        </button>
    );
}
export{ CreateTodoButton };