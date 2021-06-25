import React, { useState } from 'react'

import { View,Text,Image, TouchableOpacity} from 'react-native'
import Container from '../container'
import { onChange } from 'react-native-reanimated'
import Input from "../Input"
import CustomButton from "../CustomButton"
import styles from '../MyComponent/styles'
import { useNavigation } from '@react-navigation/core'
import { LOGIN } from '../../../constants/Routenames'
const index=({onchange,onSubmit,form,error})=> {
    const {navigate}=useNavigation();
    return (
        
        <Container >
           <Image  style={styles.logoimage}source={require("../../../assests/images/amazon1.png")}/>
           <View>
               <Text style={styles.title}>Welcome to Register page</Text>
               <Text style={styles.subtitle}>Create a free account</Text>
           <View style={styles.font}>

           <Input
            
            label="username"
            iconposition="right"
         
        placeholder="enter username"
        onChangeText={(value)=>{
            onchange({name:"username",value})
       }}   
        error={error.username}
        
            />
           <Input
            
            label="firstname"
            iconposition="right"
         
        placeholder="enter firstname"
        // value={value}
         onChangeText={(value)=>{
             onchange({name:"firstname",value})
        }}   
        error={error.firstname} 
         
            />
                 <Input
            label="lastname"
            //iconposition="right"
         
        placeholder="enter lastname"
        onChangeText={(value)=>{
            onchange({name:"lastname",value})
       }}
       error={error.lastname}   
        
        
            />
            <Input
            label="email"
            iconposition="right"
         
        placeholder="enter email"
       
        onChangeText={(value)=>{
            onchange({name:"email",value})
       }}   
       error={error.email}
        
       

            />
     
          
        <Input
            label="password"
        
        icon={<Text>show</Text>}
        onChangeText={(value)=>{
            onchange({name:"password",value})
       }}   
       error={error.password} 
        
         iconposition="right"
         securetextentry={true}
         placeholder="enter password" 
            />
        <CustomButton  onpress={onSubmit}  primary="true" title="submit" /> 
          <View style={styles.createSection}>
              <Text style={styles.infotext}>Already have an account?</Text>
              <TouchableOpacity onPress={()=>{
                  navigate(LOGIN)
              }}>
                 <Text style={styles.linkbutton}> Login</Text>
              </TouchableOpacity>
         </View>
          </View>
            </View>
       
             
        </Container>   
        
    )
}

export default index
