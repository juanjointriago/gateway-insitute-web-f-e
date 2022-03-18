import { Button, Container, FormControl, FormHelperText, Input, InputLabel, Link, StepLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import { pathLogo } from '../../images/constants'

export const Register = () => {
    const [country, setCountry] = useState('');
    const [Province, setProvince] = useState('');

    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    const handleChangeProvince = (event: SelectChangeEvent) => {
        setProvince(event.target.value as string);
    };
    return (
        <div style={{
            padding: '15%',
            backgroundColor: '#FFF7DF',
        }}>
            <img src={pathLogo} style={{
                width: '40%'
            }} alt="Gateway Corp. Logo" />

            <Container maxWidth='lg' >
                <StepLabel style={{ padding: '1%', margin: '1%', }}>Acceso a la Plataforma</StepLabel>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <InputLabel htmlFor="email">Email / Correo</InputLabel>
                    <Input id="email" aria-describedby="email" />
                    <FormHelperText id="email">Ten cuidado donde guardas tu email</FormHelperText>
                </FormControl>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <InputLabel htmlFor="fullName">Nombre Completos</InputLabel>
                    <Input id="fullName" aria-describedby="fullName" />
                    <FormHelperText id="fullName">Escribe bien tus nombres completos</FormHelperText>
                </FormControl>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input id="password" aria-describedby="password" />
                    <FormHelperText id="password">Jamás entregues tu contraseña a nadie</FormHelperText>
                </FormControl>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">País</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="country"
                                value={country}
                                label="País"
                                onChange={handleChangeCountry}
                            >
                                <MenuItem value={'Ecuador'}>Ecuador</MenuItem>
                                <MenuItem value={'Venezuela'}>Venezuela</MenuItem>
                                <MenuItem value={'Perú'}>Perú</MenuItem>
                                <MenuItem value={'Otros'}>Otros</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </FormControl>
                <FormControl style={{ padding: '1%', margin: '1%', }}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="country"
                                value={country}
                                label="País"
                                onChange={handleChangeProvince}
                            >
                                <MenuItem value={'Pichincha'}>Pichincha</MenuItem>
                                <MenuItem value={'Imbabura'}>Imbabura</MenuItem>
                                <MenuItem value={'Carchi'}>Carchi</MenuItem>
                                <MenuItem value={'Otros'}>Otros</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </FormControl>
            </Container>
            <Button style={{ margin: '5%' }} variant="outlined" >Registrarse</Button>
            <Link style={{ margin: '5%' }}>Tienes una cuenta? Continúa por aquí 💻</Link>
        </div>
    )
}
