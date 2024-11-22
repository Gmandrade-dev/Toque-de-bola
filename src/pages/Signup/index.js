import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import { Container,TextoPrincipal,Email,Senha,Background, Enviar,Tenviar, 
    Nome} from "./styles";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Signup(){
    const navigation = useNavigation();
    const {signUp} = useContext(AuthContext);
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    function handleSignUp(){
        signUp(email,senha,nome);
    }
    return(
<Background>      
    <Container 
    behavior={Platform.OS==='ios'?'padding':''}
    enabled
    >
        <TextoPrincipal>
            Cadastra-se
             
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
            <Tenviar>    Logar    </Tenviar>
        </Enviar>
    </Container>
</Background>  
    )
}