import React from 'react';
import styled from "styled-components";

const AuthInput = styled.input`
`

const AuthPage = () => {
    return (
        <div>
<AuthInput placeholder='Введите логин:'/>
<AuthInput type='password' placeholder='Введите пароль:'/>
        </div>
    );
};

export default AuthPage;