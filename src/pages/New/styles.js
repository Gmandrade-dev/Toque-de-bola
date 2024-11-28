import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #000000ee;
`;

export const Input = styled.TextInput`
  height: 70px;
  width: 90%;
  border: #207474 solid 2px;
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
  color: white;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: #207474;
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
`;

