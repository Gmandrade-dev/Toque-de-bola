import React from "react";
import { useContext } from "react";
import { ActivityIndicator,View } from "react-native";
import { AuthContext } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes(){
    const {signed,loading}= useContext(AuthContext);
    if(loading){
return(
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000ee'
    }}>
<ActivityIndicator size={50} color={'aqua'}/>
    </View>
)
    }
    
    
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );

}
export default Routes;