import React from "react";

//Creando un customHoock
function useLocalStorage(itemName, initialValue) {
    //estado para sincronizar la página
    const [syncronizedItem, setSyncronizedItem] = React.useState(true);
    //estado de error
    const [error, setError] = React.useState(false);
    //estado de carga
    const [loading, setLoading] = React.useState(true);
     // ¡Podemos utilizar otros hooks!
    const [item, setItem] = React.useState(initialValue);
  
    //simulando tiempo de espera de carga
    React.useEffect(() =>{
      setTimeout(() => {
        try{
           // Guardamos nuestro item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
            // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
          if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            }else {
              parsedItem = JSON.parse(localStorageItem);
            }
  
            setItem(parsedItem);
            setLoading(false);
            setSyncronizedItem(true);
        } catch(error){
            setError(error);
        } 
      }, 3000)
    }, [syncronizedItem])
  
    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error){
      setError(error);
    }
  
    };

    //función que coloca la aplicación en estado de carga y luego la vuelve a renderizar con la propiedad syncronized
  const syncronizeItem = () => {
    setLoading(true);
    setSyncronizedItem(false)
  }
  
    // Regresamos los datos que necesitamos
  return {
      item,
      saveItem,
      loading,
      error,
      syncronizeItem
  };
  }

  export {useLocalStorage};