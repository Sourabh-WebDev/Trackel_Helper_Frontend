import { createContext, useContext, useState } from "react";


const StateManagerContext = createContext()


const StateMangerProvider = ({ children }) => {

    const [activeTab, setActiveTab] = useState("Dashboard")




    return <StateManagerContext.Provider value={{
        activeTab,
        setActiveTab,
    }}>
        {children}
    </StateManagerContext.Provider>
}



const UseStateManager = () => {
    return useContext(StateManagerContext)
}


export { UseStateManager, StateMangerProvider }