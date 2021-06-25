import React, { useState } from 'react'
import {View,TextInput,Text} from "react-native";
import { color, onChange } from 'react-native-reanimated';
import colors from '../../../assests/theme/colors';
import styles from '../CustomButton/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
const CustomButton=({ 
    title,
    loading,
    disabled,
    secondary,
    primary,
    danger,
    onPress      
    })=> {
    const getbackgroundcolor=()=>{
        if(disabled){
            return colors.grey
        }      
        if(primary){
                  return colors.primary
              }
              if(secondary){
                  return colors.secondary
              }
              if(danger){
                  return colors.danger
              }
    } 
    return (
    <TouchableOpacity 
    
    disabled={disabled}
    onPress={onPress}
    style={[styles.wrapper,{backgroundColor:getbackgroundcolor()}]}>
        <View style={styles.loadersection}>
        {loading && <ActivityIndicator color={primary?colors.secondary:colors.primary}/>}
        {title && <Text style={{color:disabled?"black":colors.white,paddingLeft:loading?5:0}}>{title}</Text>}      
           
            </View>
     
             
        </TouchableOpacity>
    )
}

export default CustomButton
