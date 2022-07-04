import React from "react";
//import './App.css';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { ToDoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    totalTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />


      <TodoList>
        {error && <p>Existe un error D:</p>}
        {loading && <p>Estamos Cargando...</p>}
        {(!loading && !totalTodo) && <p>Crea tu primer To Do!</p>}

        {searchedTodo.map(todo => (
          // Estos elementos se colocan dentro de props en React
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>
  
          {/* Preguntar si es que openModal es true */}
      {  !!openModal && (
           <Modal>
            <p>{searchedTodo[0]?.text}</p>
          </Modal>
        )}

      <CreateTodoButton setOpenModal= {setOpenModal} />
      
     

    </React.Fragment>
  );
}

export { AppUI }; 