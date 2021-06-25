import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
    logoimage:{
        backgroundColor:"black",
        height:50,
        width:"50%",
        marginTop:50,
        marginLeft:80
        
        
                
    },
    title:{
           fontSize:21,
           textAlign:"center",
           paddingTop:20,
           fontWeight:"500",

         }
         ,
    subtitle:{
        fontSize:17,
           textAlign:"center",
           paddingTop:20,
           fontWeight:"500",
    },
    font:{
        paddingTop:90,

    },
    createSection:{
      flexDirection:"row"
    },
    infotext:{
             fontSize:17
    },
    linkbutton:{
           paddingLeft:17,
           color:Colors.primary,
           fontSize:16
    },
    name:{
        color:"red"
    }

})