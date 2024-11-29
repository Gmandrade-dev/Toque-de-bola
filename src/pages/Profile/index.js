import React, { useContext } from 'react';
import {
  Container, 
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText,
  AreaButao
 } from './styles'

import Header from '../../components/header';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native'

export default function Profile(){
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return(
    <Container>
      <Header title="Meu perfil" />

      <Message>
        Hey, bem vindo de volta!
      </Message>

      <Name numberOfLines={1} >
        {user && user.name}
      </Name>
<AreaButao>
      <NewLink onPress={ () => navigation.navigate('Registro') }>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={ () => signOut() }>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
</AreaButao>      
    </Container>
  )
}