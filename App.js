import React, { useState } from 'react';

import {
    Container,
    HeaderArea,
    HeaderTitle,
    CustomButton,
    CustomButtonText,
    CustomButtonContent,
    InputHour,
    ContainerInput,
    CustomButtonInput
} from './styles';



export default () => {

  btnPiscina = ()=>{
    fetch('http://192.168.1.8/set-state-piscina');
  }

  btnInitTimer = () => {
    fetch('http://192.168.1.8/set-timer-start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secStart: timerInitialField
      })
    });
  }

  btnFimTimer = () => {
    fetch('http://192.168.1.8/set-timer-limmited', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secLimmited: timerFinalField
      })
    });
  }
  
  const [timerInitialField, setTimerInitialField] = useState('');
  const [timerFinalField, setTimerFinalField] = useState('');
  return (
    <Container>     
      <HeaderArea>
          <HeaderTitle>AQUA</HeaderTitle>
      </HeaderArea>

      <ContainerInput>
        <InputHour placeholder="Tempo inicial" value={timerInitialField} onChangeText={t=>setTimerInitialField(t)} />
        <CustomButtonInput onPress={btnInitTimer}>
          <CustomButtonText>ok</CustomButtonText>                       
        </CustomButtonInput>
      </ContainerInput>

      <ContainerInput>
        <InputHour placeholder="Tempo Final" value={timerFinalField} onChangeText={t=>setTimerFinalField(t)} />
        <CustomButtonInput onPress={btnFimTimer}>
          <CustomButtonText>ok</CustomButtonText>                       
        </CustomButtonInput>
      </ContainerInput>

      <CustomButtonContent>
        <CustomButton onPress={btnPiscina}>
          <CustomButtonText>Ativar piscina</CustomButtonText>                       
        </CustomButton>
      </CustomButtonContent>
    </Container>
  );
}