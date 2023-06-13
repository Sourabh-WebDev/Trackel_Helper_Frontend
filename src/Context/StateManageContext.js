import { createContext, useContext, useState } from "react";
import { mockDataContacts } from "../Dashboard/data/mockData";


const StateManagerContext = createContext()


const StateMangerProvider = ({ children }) => {

    const [activeTab, setActiveTab] = useState("Dashboard")

    const [rows, setRows] = useState(mockDataContacts); // Initial rows state
    // add order Modal controller 
    const [Show, setShow] = useState(false)


    return <StateManagerContext.Provider value={{
        activeTab,
        setActiveTab,
        rows,
        setRows,
        Show,
        setShow

    }}>
        {children}
    </StateManagerContext.Provider>
}



const UseStateManager = () => {
    return useContext(StateManagerContext)
}


export { UseStateManager, StateMangerProvider }