import { createContext, useContext, useState } from "react";
import { mockDataContacts } from "../AdminDashboards/data/mockData";


const StateManagerContext = createContext()


const StateMangerProvider = ({ children }) => {

    const [Loader, setLoader] = useState(false)

    const [activeTab, setActiveTab] = useState("Dashboard")

    const [rows, setRows] = useState(mockDataContacts); // Initial rows state
    // add order Modal controller 
    const [Show, setShow] = useState(false)

    // Login Modal 

    const [LoginOpen, setLoginOpen] = useState(false)
    const [SingUp, setSingUp] = useState(false)


    return <StateManagerContext.Provider value={{
        activeTab,
        setActiveTab,
        rows,
        setRows,
        Show,
        setShow,
        LoginOpen,
        setLoginOpen,
        SingUp,
        setSingUp,
        Loader,
        setLoader
    }}>
        {children}
    </StateManagerContext.Provider>
}



const UseStateManager = () => {
    return useContext(StateManagerContext)
}


export { UseStateManager, StateMangerProvider }