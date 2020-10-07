import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #03045e;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #00b4d8;
`;
export const HeaderTitle = styled.Text`
    margin: 10px 10px;
    font-size: 30px;
    font-weight: bold;
    color: #FFF;
    
`;

export const CustomButtonInput = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    background-color: #f9c74f;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    width: 150px;
    background-color: #06d6a0;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const InputHour = styled.TextInput`
    background: #00b4d8;
    color: #FFF;
    font-size: 20px;
    width: 40%;
    margin-top: 30px;
    border-radius: 15px;
`;

export const ContainerInput = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const CustomButtonContent = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const CustomContentRow = styled.View`
    flex-direction: row;
`
export const CustomButtonText= styled.Text`
    font-size: 20px;
    color: #FFF;
`
export const Text= styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #009E99;
`