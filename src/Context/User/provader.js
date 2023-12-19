import React, { useContext, useReducer } from "react";
import UserReducer from "./reducer"
import UserState from "./state"

const UserContext = React.createContext()
const UserProvider = ({ children }) => {
    const contextValue = useReducer(UserReducer, UserState);
    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export default UserProvider;

export const useUserProvider = () => {
    const contextValue = useContext(UserContext);
    console.log({contextValue});
    return contextValue;
}