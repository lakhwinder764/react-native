import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View,Text } from 'react-native'
import { CONTACT_DETAILS, CONTACT_LIST,CREATE_CONTACT,SETTINGS } from '../constants/Routenames'
import contact from '../screens/contact'
import contactDetail from '../screens/contactDetail'
import createcontact from '../screens/createContact'
import settings from '../screens/settings'
const HomeNavigator=()=> {
  const HomeStack=createStackNavigator()
    return (
    <HomeStack.Navigator initialRouteName={CREATE_CONTACT}> 
       <HomeStack.Screen name={CONTACT_LIST} component={contact}/>
       <HomeStack.Screen name={CONTACT_DETAILS} component={contactDetail}/>
       <HomeStack.Screen name={CREATE_CONTACT} component={createcontact}/>
       <HomeStack.Screen name={SETTINGS} component={settings}/>
                   

       
       </HomeStack.Navigator>
    )
}

export default HomeNavigator
