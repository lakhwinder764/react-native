import React, { useState } from 'react'

import { View,Text,Image, TouchableOpacity} from 'react-native'
import Container from '../container'
import { onChange } from 'react-native-reanimated'
import Input from "../Input"
import CustomButton from "../CustomButton"
import styles from '../MyComponent/styles'
import { useNavigation } from '@react-navigation/core'
const index=()=> {
    const {navigate}=useNavigation();
    return (
        
        <Container >
           <Image  style={styles.logoimage}source={require("../../../assests/images/amazon1.png")}/>
           <View>
               <Text style={styles.title}>Welcome to login page</Text>
               <Text style={styles.subtitle}>Please login here</Text>
           <View style={styles.font}>
            <Input
            label="username"
            iconposition="right"
         
        placeholder="enter username"
        // value={value}
        // onChangeText={(text)=>{
        //     onChangeText(text)
        // }}   
         iconposition="right"
         error={"this field is required"} 
            />
     
          
        <Input
            label="password"
        
        icon={<Text>show</Text>}
        // value={value}
        // onChangeText={(text)=>{
        //     onChangeText(text)
        // }}   
         iconposition="right"
         securetextentry={true} 
            />
        <CustomButton primary="true" title="submit" /> 
          <View>
              <Text>Need a acount?</Text>
              <TouchableOpacity onPress={()=>{
                  navigate(REGISTER)
              }}>
                 <Text> Register</Text>
              </TouchableOpacity>
         </View>
          </View>
            </View>
       
             
        </Container>   
        
    )
}

export default index
