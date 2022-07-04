import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

//atajo del proveedor
function TodoProvider(props) {

    //Estados
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    //----------ESTADOS------------
    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    //filtrando los todo para ver cuales son verdaderos     !!devulve falso si es falso
    const completedTodo = todos.filter(todo => !!todo.completed).length;
    const totalTodo = todos.length;

    //variables de la búsqueda
    let searchedTodo = [];
    if (searchValue.length < 1) {
        //si el input esta vacio
        searchedTodo = todos;
    } else {
        //buscar los to dos
        searchedTodo = todos.filter(todo => {
            const searchText = searchValue.toLowerCase();
            const todoText = todo.text.toLowerCase();
            return todoText.includes(searchText);
        })
    }


    //completar todo
    const completeTodo = (text) => {
        //marcar el todo indicado como completado
        const todoIndex = todos.findIndex(
            todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        //actualizar estado
        saveTodos(newTodos);
    }

    //Borrar Todo
    const deleteTodo = (text) => {
        //eliminar el todo indicado
        const todoIndex = todos.findIndex(
            todo => todo.text === text
        );
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    console.log("render antes de use effect")
    //efectos
    React.useEffect(() => {
        console.log("use effect");
    }, [totalTodo]);


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodo,
            completedTodo,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };