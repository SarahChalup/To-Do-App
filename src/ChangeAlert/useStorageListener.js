import React from "react";

function useStorageListener(syncronize){
        const [storageChange, setStorageChange] = React.useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1'){
                console.log("Hubo cambios")
                setStorageChange(true)
            }n
        })

        //toggleShow significa accionar el mostrar
        const toggleShow = () => {
            syncronize()
            setStorageChange(false)
        }


        return{ 
            show: storageChange,
            toggleShow  
        }
    }


export {useStorageListener}