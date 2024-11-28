import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import New from "../pages/New";
import { Button } from "react-native";

const Drawer= createDrawerNavigator();

export default function AppRoutes(){
    return(
        <Drawer.Navigator screenOptions={{
            headerShown:false,
            drawerStyle:{
                backgroundColor:'#1d1c1cee',
                paddingTop:15,
            },
            drawerActiveBackgroundColor:'#0f0f0fee',
            drawerActiveTintColor:'aqua',
            drawerInactiveTintColor:'white',


        }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Registro" component={New} />
            
            
            
        </Drawer.Navigator>
    );
}