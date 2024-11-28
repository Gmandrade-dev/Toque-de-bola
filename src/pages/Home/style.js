import styled from "styled-components/native";

export const Background =styled.SafeAreaView`
flex:1;
background-color:#000000ee;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  background-color: #131212ee;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  margin-top:12px;
  
  
  
`;

export const Title = styled.Text`
  margin-left: 4px;
  color: #e0dbdb;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
  margin-top:5px;

`;

export const List = styled.FlatList`
  flex:1;
  background-color: #131212ee;
`;