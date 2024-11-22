import { styled } from "styled-components/native";



export const Background = styled.View`
flex:1;
background-color: #000000ee;
`;
export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content:center;


`;

export const TextoPrincipal = styled.Text`
color: aqua;
font-size:40px;
margin-top:-70px;
margin-bottom:50px;
letter-spacing:4px;
font-style:italic;
font-weight:bold;

`;

export const Email = styled.TextInput`
border:aqua 1px solid;
width:80%;
border-radius:20px;
height:60px;
margin-bottom:15px;
text-align:center;
color:aqua;
font-size:17px;
padding:5px;

`;
export const Nome = styled.TextInput`
border:aqua 1px solid;
width:80%;
border-radius:20px;
height:60px;
margin-bottom:15px;
text-align:center;
color:aqua;
font-size:17px;
padding:5px;

`;
export const Senha = styled.TextInput`
border:aqua 1px solid;
width:80%;
border-radius:20px;
height:60px;
text-align:center;
color:aqua;
font-size:17px;
padding:5px;

`;
export const ButtonCadastro = styled.TouchableOpacity`
margin-top:15px;

`;
export const Tcadastro = styled.Text`
color:aqua;
font-size:15px;
text-decoration:underline;
`;

export const Enviar = styled.TouchableOpacity`
background-color:#1b858dff;
width:80%;
height:60px;
padding:5px;
justify-content:center;
margin-top:15px;
border-radius:30px;

`;
export const Tenviar = styled.Text`
color:aqua;
font-size:20px;
letter-spacing:3px;
text-align:center;

`;