import React from "react";
import { Platform } from "react-native";
import { Container,TextoPrincipal,Email,Senha, 
    Background, Enviar,Tenviar, ButtonCadastro,Tcadastro } from "./styles";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Signin(){
    const navigation = useNavigation();
    return(
<Background>      
    <Container 
    behavior={Platform.OS==='ios'?'padding':''}
    enabled
    >
        <TextoPrincipal>
            Login
            
        </TextoPrincipal>

        <Email placeholder="Digite seu email" placeholderTextColor="aqua" 
        
        />
        <Senha placeholder="Digite sua senha" placeholderTextColor="aqua"
        secureTextEntry/>
        <ButtonCadastro  onPress={()=>{navigation.navigate('Signup')}}>
            <Tcadastro >
                Crie sua conta!
            </Tcadastro>
        </ButtonCadastro>
        <Enviar >
            <Tenviar>    Logar    </Tenviar>
        </Enviar>
    </Container>
</Background>  
    )
}