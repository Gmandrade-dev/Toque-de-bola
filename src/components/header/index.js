import React from "react";
import { Container,Title,ButtonMenu} from "./style";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";

export default function Header({title}){
    const navigation=useNavigation();
    return(
        <Container>
            <ButtonMenu onPress={()=>{navigation.openDrawer()}}>
            <Icon name="menu" size={35} color="#f3e9e9ee" />
            </ButtonMenu>
            {
             title  && (
                <Title>
                    {title}
                </Title>
             )}

        </Container>
    );
}