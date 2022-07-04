import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoSearch.css";

function TodoSearch(){
   const {
    searchValue,
    setSearchValue,
   } = React.useContext(TodoContext);
    //event es una propiedad propia de react, en ningun lado la estoy enviando
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
       <input 
            placeholder="Ingrese su tarea..." 
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}
//para exportar el componente
export {TodoSearch};