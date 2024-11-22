import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const AuthStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Signin" component={Signin}
            options={{headerShown:false}}
            />
            <AuthStack.Screen name="Signup" component={Signup}
            options={{headerStyle:{
                backgroundColor:'#000000ee',
                
            },
        headerTintColor:'white',
        headerShadowVisible:false,
        headerTitle:'Voltar',
        headerBackTitleVisible:false
        }}
            />
        </AuthStack.Navigator>
    );
}