import React, { useState } from 'react'
import {View,TextInput,Text } from "react-native";
import { color, onChange } from 'react-native-reanimated';
import colors from '../../../assests/theme/colors';
import styles from '../../common/Input/styles';
const Input=({ 
    onChangeText,
     style,
     value,
     label,
     icon,
     iconposition,
     error,
     placeholder,
     ...props
    })=> {
   const [focussed,setfocussed]=useState(false);
    const getbordercolor=()=>{
       if(focussed){
           return color.primary;
       }
        if(error){
              return colors.danger
       }
       else{
              return colors.grey
       }
   }
    const getflexdirection=()=>{
        if(icon && iconposition){
            if(iconposition==="left"){
                return "row"
            }
            else if(iconposition=="right"){
                 return "row-reverse"
            }
        }
    }
    return (
    <View style={styles.inputContainer}>
        {label  && <Text>{label}</Text>}
        <View style={[styles.wrapper,
           {alignItems:icon?"center":"baseline"}
        ,
            { borderColor:getbordercolor(),flexDirection:getflexdirection()}]}>
          <View>
              {icon && icon}
              </View>
              <TextInput
             style={[styles.TextInput,style]}
                     
            
            icon={icon}
            onFocus={()=>{
                setfocussed(true);
            }}
            placeholder={placeholder}
onBlur={()=>{
    setfocussed(false)
}}
{...props}

                />
              
       
       </View>
       {error && <Text style={styles.error}>{error}</Text> }
        </View>
    )
}

export default Input
