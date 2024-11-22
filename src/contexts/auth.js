import React,{ createContext, useState} from "react";
import {Api} from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export const AuthContext= createContext();



function AuthProvider({children}){
    const navigation = useNavigation();
    const [user,setUser] = useState({
        nome:'Guilherme Andrade'
    });
    async function signUp(email,senha,nome) {
        try{
            const response = await Api.post('/users',{
                name:nome,
                password:senha,
                email:email,
            })
            navigation.goBack()
        }catch(err){
console.log('Erro ao cadastrar',err)
            alert('Não foi possível cadastrar');
        }            
    }
    return(
    <AuthContext.Provider value={{user,signUp}}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthProvider;

