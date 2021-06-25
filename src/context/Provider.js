import React,{createContext,useReducer} from "react"; 
import contactInitialState from "./initialstates/contactInitialState";
import authInitialState from "./initialstates/authInitialState";
import contacts from "./reducer/contacts";
import auth from "./reducer/auth";
export const GlobalContext=createContext({});
const GlobalProvider=({children})=>{

    const [authstate,authDispatch]=useReducer(auth,authInitialState);
    const [contactstate,contactDispatch]=useReducer(contacts,contactInitialState);
    return <GlobalContext.Provider value={{
            authstate,contactstate,authDispatch,contactDispatch

    }}>
           {children}      
    </GlobalContext.Provider> 
}
export default GlobalProvider;