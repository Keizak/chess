import React from 'react';
import styled from "styled-components";

const AuthInput = styled.input`
height: 40px;
width: 300px;
margin-bottom: 50px;
margin-left:auto;
margin-right: auto;

`
const AuthFullPage = styled.div`
display: flex;
height: 100vh;`

const AuthWindow = styled.div`
background: rgb(204,204,204,1);
width: 500px;  
height: 400px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
`

const AuthPage = () => {
    return (
        <AuthFullPage>
        <AuthWindow>
<AuthInput placeholder='Введите логин:'/>
<AuthInput type='password' placeholder='Введите пароль:'/>
        </AuthWindow>
        </AuthFullPage>
    );
};

export default AuthPage;