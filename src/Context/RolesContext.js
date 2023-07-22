import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";

const roles = {
    super: "super",
    admin: "admin",
    office: "office",
    service: "service",
    supervisor: "supervisor"
}


const RolesContext = createContext()

const RolesProvider = ({ children }) => {

    const [activeUser, setActiveUser] = useState(null)
    const [userRole, setUserRole] = useState(
        JSON.parse(sessionStorage.getItem("roles"))
    )
    // every roles
    const [adminRoles, setAdminRoles] = useState(null)
    const [supervisorRoles, setSupervisorRoles] = useState(null)
    const [backOfficeRoles, setBackOfficeRoles] = useState(null)
    const [serviceProviderRoles, setServiceProviderRoles] = useState(null)



    const UserRoleCalled = async (Role) => {
        const role = Role ? Role : sessionStorage.getItem("role")
        try {
            const response = await axios.get(`${API_URL}/roles/get/${role}`)
            if (response.status === 200) {
                // setUserRole(response.data.data)
                sessionStorage.setItem("roles", JSON.stringify(response.data.data))
                setUserRole(JSON.parse(sessionStorage.getItem('roles')))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        UserRoleCalled()
    }, [])
    // call all the roles
    const getAdminRoles = async () => {
        try {
            const response = await axios.get(API_URL + "/roles/get/admin")
            if (response.status === 200) {
                setAdminRoles(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getSupervisorRole = async () => {
        try {
            const response = await axios.get(API_URL + "/roles/get/supervisor")
            if (response.status === 200) {
                setSupervisorRoles(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const GetBackofficeRoles = async () => {
        try {
            const response = await axios.get(API_URL + "/roles/get/office")
            if (response.status === 200) {
                setBackOfficeRoles(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const GetServiceProvider = async () => {
        try {
            const response = await axios.get(API_URL + "/roles/get/service")
            if (response.status === 200) {
                setServiceProviderRoles(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // UserRoleCalled()
        getAdminRoles()
        getSupervisorRole()
        GetBackofficeRoles()
        GetServiceProvider()
    }, [])



    return <RolesContext.Provider value={{
        UserRoleCalled,
        userRole,
        activeUser,
        setUserRole,
        supervisorRoles,
        backOfficeRoles,
        serviceProviderRoles,
        adminRoles,
        setActiveUser,
        getAdminRoles,
        getSupervisorRole,
        GetBackofficeRoles,
        GetServiceProvider,
    }}>
        {children}
    </RolesContext.Provider>
}




const useUserRoleContext = () => {
    return useContext(RolesContext)
}


export { RolesProvider, useUserRoleContext }