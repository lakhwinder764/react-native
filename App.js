import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppContainer from "./src/navigations/index"
const HelloWorldApp = () => {
  return (
    <GlobalProvider>
   <AppContainer/>
   </GlobalProvider>
  )
}
export default HelloWorldApp;