import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View,Text } from 'react-native'
import { LOGIN, REGISTER } from '../constants/Routenames'
import login from '../screens/login'
import register from '../screens/register'



const AuthNavigator=()=> {
  const Stack=createStackNavigator()
    return (
    <Stack.Navigator screenOptions={{headerShown:false}}> 
       <Stack.Screen name={LOGIN} component={login}/>
       <Stack.Screen name={REGISTER} component={register}/>
       
                   

       
       </Stack.Navigator>
    )
}

export default AuthNavigator
