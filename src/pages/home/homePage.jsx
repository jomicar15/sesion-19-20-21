import React,{useState} from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h3>¡Hola Bienvenido al juego de Chuck Norris!</h3>  
            <p>Este juego te mostrará distintos chistes en los cuales deberás darle like o dislike</p>
            <p>Posteriormente se van a ir mostrando en un contador la cantidad de chistes que te gustan y los que no</p>
            <Button variant='contained' onClick={()=>navigate('start-game')}>Empezar juego</Button>
        </div>
    );
}

export default HomePage;
