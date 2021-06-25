import React from 'react'
//import { createStackNavigator } from '@react-navigation/stack'
import { View,Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/Routenames'




const DrawerNavigator=()=> {
  const Drawer=createDrawerNavigator()
    return (
    <Drawer.Navigator> 
       <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}/>
       
       
       
                   

       
       </Drawer.Navigator>
    )
}

export default DrawerNavigator
