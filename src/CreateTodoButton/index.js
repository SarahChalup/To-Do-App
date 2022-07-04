import React from "react";
import "./createTodoButton.css"


function CreateTodoButton(props){
    const onClickButton = () => {
        //si estaba en true se hace false y vicebersa
        props.setOpenModal(preState => !preState);
    }

    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}>
            +
        </button>
    );
}
export{ CreateTodoButton };