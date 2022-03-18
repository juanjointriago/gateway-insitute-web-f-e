import React from 'react';
import axios from 'axios';
import { baseURL } from '../../../setup/apiConfig';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, FormHelperText, Input, InputLabel, Link, StepLabel } from '@mui/material';
import { pathLogo } from '../../images/constants';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export const LOGIN = "LOGIN";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const loginUser = ({ email, password, history }: any) => {
    const request = axios.post(`${baseURL}auth/login`, { email, password });

    return (dispatch: any) => {
        request.then((res: any) => {
            sessionStorage.setItem("jwt", JSON.stringify(res.data.token));
            sessionStorage.setItem("userInfo", JSON.stringify(res.data.user));
            dispatch({ type: LOGIN, payload: res.data.user });
            dispatch(

            )
        })
    }

}

export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/welcome', {
            //for not create a new history , this component replace 
            replace: true
        });
    }
    const handleRegister = () => {
        navigate('/register', {
            //for not create a new history , this component replace 
            replace: true
        });
    }
    return (
        <div style={{
            padding: '15%',
            backgroundColor: '#FFF7DF',
        }}>
            <img src={pathLogo} style={{
                width: '40%'
            }} alt="Gateway Corp. Logo" />

            <Container maxWidth='lg' >
            <Link style={{ marginLeft: '20%' }}>Acceso a la Plataforma</Link>

                <StepLabel style={{ padding: '1%', margin: '1%', }}>Acceso a la Plataforma</StepLabel>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <InputLabel htmlFor="email">Email / Correo</InputLabel>
                    <Input id="email" aria-describedby="email" />
                    <FormHelperText id="email">Ten cuidado donde guardas tu email</FormHelperText>
                </FormControl>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input id="password" aria-describedby="password" />
                    <FormHelperText id="password">Jamás entregues tu contraseña a nadie</FormHelperText>
                </FormControl>
            </Container>
            <Stack direction="row" style={{ padding: '1%', margin: '1%', }} spacing={1}>
                <Button variant="outlined" endIcon={<SendIcon />} onClick={handleLogin}>
                    Send
                </Button>
            <Link style={{ marginLeft: '20%' }} onClick={handleRegister}>No Tienes una cuenta? Registrate   aquí 💻</Link>
            </Stack>
        </div>
    )
}
