import React,{useState,useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View,Text } from 'react-native'
import SignUp from "../../components/common/Signup"
const register=()=>{
    const [form,setform] = useState({});
    const [error,seterror] = useState({});
const onchange=({name,value})=>{

    setform({...form,[name]:value})
    if(value!==""){
        seterror(prev=>{
            return {...prev,[name]:val}
        })
    }
   
}

const onSubmit=()=>{
         console.log(form)
}
useEffect(()=>{
    if(!form.username){
       
    }

    if(!form.firstname){
        seterror(prev=>{
            return {...prev,firstname:"please fill out this field"}
        })
    }

    if(!form.lastname){
        seterror(prev=>{
            return {...prev,lastname:"please fill out this field"}
        })
    }

    if(!form.email){
        seterror(prev=>{
            return {...prev,email:"please fill out this field"}
        })
    }

    if(!form.password){
        seterror(prev=>{
            return {...prev,password:"please fill out this field"}
        })
    }
        
},[

])



    return(
       <SignUp form={form} onSubmit={onSubmit} onchange={onchange} error={error}/>
    )
}
export default register



