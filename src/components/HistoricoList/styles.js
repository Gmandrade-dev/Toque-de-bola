import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #313136;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const TipoText = styled.Text`
color: #FFF;
font-size: 16px;
font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#7a3338' : '#27926f'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const ValorText = styled.Text`
  color: #ece5e5;
  font-size: 22px;
`;
