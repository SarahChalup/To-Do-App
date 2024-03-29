import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading}){
 
    //event es una propiedad propia de react, en ningun lado la estoy enviando
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
       <input 
            placeholder="Busca tu tarea..." 
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}/>
    );
}
//para exportar el componente
export {TodoSearch};