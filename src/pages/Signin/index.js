import React, { useState,useContext } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { Container,TextoPrincipal,Email,Senha, 
    Background, Enviar,Tenviar, ButtonCadastro,Tcadastro } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";



export default function Signin(){
    const {signIn,loadingAuth}= useContext(AuthContext);
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    function Logando(){
        signIn(email,senha);
    }
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
        value={email} onChangeText={(text)=>{setEmail(text)}}
        />
        <Senha placeholder="Digite sua senha" placeholderTextColor="aqua"
        secureTextEntry
        value={senha} onChangeText={(text)=>{setSenha(text)}}
        />
        <ButtonCadastro  onPress={()=>{navigation.navigate('Signup')}}>
            <Tcadastro >
                Crie sua conta!
            </Tcadastro>
        </ButtonCadastro>

        <Enviar onPress={Logando}>
            {
                loadingAuth ? (<ActivityIndicator size={20} color={'aqua'} /> )
                    :(<Tenviar>    Logar    </Tenviar>)
            }
        </Enviar>

    </Container>
</Background>  
    )
}