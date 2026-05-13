import { useContext, useState, useEffect, createContext } from "react";
import type { CreateContextType } from "../types/types";


const LocalStorageContext = createContext<CreateContextType>({
  localData: "",
  updateLocalDate: (key: string, value: object) => { },
});


export const LocalStorageProvider = ({ children }: {
  children: React.ReactNode
}) => {

  const [localData, setLocalData] = useState<string>("");


  const getLocalData = (key: string) => {
    const dataFromLocalStorage = localStorage.getItem(key);


    if (dataFromLocalStorage) {
      setLocalData(JSON.parse(dataFromLocalStorage));
    }
  }

  const updateLocalDate = (key: string, value: object) => {
    const dataToSave = JSON.stringify(value);


    // debug
    if (localStorage.getItem(key)) {
      console.log("exist, updating");
      localStorage.setItem(key, dataToSave);
    }
    else {
      console.log("creating new entry");
      localStorage.setItem(key, dataToSave);
    }
  };



  return (
    <LocalStorageContext.Provider value={{ localData, updateLocalDate }}>
      {
        children
      }
    </LocalStorageContext.Provider>
  )
}

export const useLocalStorage = () => {
  const ctx = useContext(LocalStorageContext);

  if (!ctx) throw new Error("Only should be used within a LocalStorageProvider");

  return ctx;
}