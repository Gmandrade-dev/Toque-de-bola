import React, { useState } from "react";
import { Alert, Platform,ActivityIndicator} from "react-native";
import { Container,TextoPrincipal,Email,Senha,Background, Enviar,Tenviar, 
    Nome} from "./styles";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Signup(){
    const navigation = useNavigation();
    const {signUp,lodingAuth} = useContext(AuthContext);
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    function handleSignUp(){
       if(nome===''){
        
        Alert.alert('Digite seu nome!');
        return;

        }

        if (!isValidEmail(email)) {
            Alert.alert('Erro', 'Digite um email válido!');
            return;
        }

        if( senha.length < 6 ){
        
            Alert.alert('Digite uma senha válida! Precisa ser maior que 6 caracteres');
            return;
    
            }

        signUp(email,senha,nome);
    }
    return(
<Background>      
    <Container 
    behavior={Platform.OS==='ios'?'padding':''}
    enabled
    >
        <TextoPrincipal>
            Cadastre-se
             
        </TextoPrincipal>


        <Nome placeholder="Digite seu nome" placeholderTextColor="aqua" 
        value={nome} onChangeText={(text)=>{setNome(text)}}
        />
        <Email placeholder="Digite seu email" placeholderTextColor="aqua" 
        value={email} onChangeText={(text)=>{setEmail(text)}}
        />

        <Senha placeholder="Digite sua senha" placeholderTextColor="aqua" 
        secureTextEntry  value={senha} onChangeText={(text)=>{setSenha(text)}}
        
        />
        <Enviar onPress={handleSignUp}>
            {
                lodingAuth ? (
                    <ActivityIndicator size={20} color={"aqua"}/>
                ):(
                    <Tenviar>    Cadastrar    </Tenviar>
                )
            }
           
        </Enviar>
    </Container>
</Background>  
    )
}