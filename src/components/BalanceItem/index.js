import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }){

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '2c2d2e'
      }
    }else if(data.tag === 'receita'){
      return{
        label: 'Entradas de hoje',
        color: '207474'
      } 
    }else{
      return{
        label: 'Saidas de hoje',
        color: 'a0453e'
      }
    }
    
  }, [data])

  return(
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  )
}