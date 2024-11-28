import React,{ createContext, useEffect, useState} from "react";
import api, {Api} from "../services/api";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext= createContext();




function AuthProvider({children}){
    const navigation = useNavigation();
    const [user,setUser] = useState(null);
    const [loadingAuth,setLoadingAuth] = useState (false);
    const [loading,setLoading] = useState (true);
//permancendo logado com asyncStore 

useEffect(()=>{
    async function loadStorage(params) {
        const storageUser= await AsyncStorage.getItem('@finToken')
        if(storageUser)
        {
            const response = await api.get('me',{
                headers:{
                    'Authorization':`Bearer ${storageUser}` 
                }
            })
            .catch(()=>{
                setUser(null);
            })
            api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
            setUser(response.data);
            setLoading(false);
        }
        setLoading(false);
    }
loadStorage();
},[])


//Cadastro


async function signUp(email,senha,nome) {
    setLoadingAuth(true);
try{
    const response = await api.post('/users',{
        name: nome,
        password:senha,
        email:email,
    })
    setLoadingAuth(false);
    navigation.goBack();
}catch(err){
Alert.alert('Não foi possível fazer o cadastro, tente novamente mais tarde!');
setLoadingAuth(false);
}}
//Login

async function signIn(email,senha) {
setLoadingAuth(true);
    try{
        const response = await api.post('/login',{
            email:email,
            password:senha
        })
        const {id,name,token} = response.data;
        const data = {
            id,
            name,
            token,
            email,
        };
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem('@finToken',token);
        setUser({id,name,email});
        setLoadingAuth(false);
        console.log (id,name,email);
    }catch(err){
        Alert.alert('Email ou senha incorretos!');
        setLoadingAuth(false);
    }
}
async function signOut(params) {
    await AsyncStorage.clear()
    .then(()=>{
        setUser(null);
    });
}
    return(
    <AuthContext.Provider value={{signed:!!user,loading,loadingAuth,
    signOut,signIn,user,signUp}}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthProvider;

