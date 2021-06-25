import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import HomeNavigator from './HomeNavigator';
import { GlobalContext } from '../context/Provider';
const index= ()=> {
    
    const {authstate}=useContext(GlobalContext)
    console.log(authstate.isloggedIn)
    return (
        <NavigationContainer>
     {authstate.isloggedIn?
        <DrawerNavigator/>:<AuthNavigator/>
    }       
           
          



        
    
        </NavigationContainer>
    )
}

export default index

