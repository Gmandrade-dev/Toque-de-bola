
import {Alert, Text, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";
import 'react-native-gesture-handler';

export default function App(){

  return(
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>    
);
}


