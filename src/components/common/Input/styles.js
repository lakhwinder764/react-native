import { StyleSheet, TextInput } from "react-native";
import colors from "../../../assests/theme/colors";

export default StyleSheet.create({
    wrapper:{
        height:42,
        borderColor:colors.grey,
        borderWidth:1,
        borderRadius:4,
        
        marginTop:5
         
        
    },


    TextInput :{
         
        flex:1 ,
        width:335



    }
    ,
    inputContainer:{
        paddingVertical:12,
    },
    error:{
        color:colors.danger,
        paddingTop:4,
        fontSize:12
    }
})


