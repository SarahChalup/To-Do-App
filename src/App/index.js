import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";


// import "../TodoSearch";
// import "../TodoList";
// import "../TodoItem";
// import "../CreateTodoButton";


function App() {
  return (
    <TodoProvider>
      <AppUI />
      {/* Ahora todos los componentes de AppUI van a poder tener el estado dek proveedor */}
    </TodoProvider>
  );
}

export default App;
