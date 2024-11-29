import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #101011;
  
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
  text-align:center;
  color:white;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px;
  text-align:center;
  color: #e6e6e6;
`;

export const NewLink = styled.TouchableOpacity`
  background-color: #33948f;
  width: 40%;
  height: 70px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  justify-items:center;
  
  margin-bottom: 14px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 70px;
  border-width: 1px;
  border-radius: 8px;
  background-color:#8f2a2a;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:white;
`;
export const AreaButao = styled.View`

flex-direction:row;
justify-content:space-between;
padding:20px;
`;