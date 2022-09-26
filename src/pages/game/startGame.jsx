import React,{useState,useEffect} from 'react';
import { getJoke } from '../../services/axiosService';
import likeIcon from '../../img/thumb-up.png';
import disLikeIcon from '../../img/thumb-down.png';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const StartGame = () => {
    const navigate = useNavigate();
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const [joke, setJoke] = useState(null);
    // const [iconPress, setIconPress] = useState(true);
    const [estiloPersonal, setEstiloPersonal] = useState({});

    useEffect(() => {
        newJoke();
    }, []);
 
    const iconButtonPress = ()=>{
        // setIconPress(false);
    }

    const likeAction = ()=>{
        if(Object.keys(estiloPersonal).length < 1){
            setLike(like+1);
            setEstiloPersonal({opacity:"0.5"})
            iconButtonPress();
        }
    }

    const disLikeAction = ()=>{ 
        if(Object.keys(estiloPersonal).length < 1){
            setDisLike(disLike+1);
            setEstiloPersonal({opacity:"0.5"})
            iconButtonPress();
        }
    }

    const newJoke=()=>{
        setEstiloPersonal({});
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json()).then(res => setJoke(res.value))
        .catch(error=>console.log(error));
        // setIconPress(true);
    }

    
    return (
        <div style={{marginTop:"2em"}}>
            <h2 style={{maxWidth:"800px",margin:"auto", textAlign:"center", padding:"15px"}}>{joke ? joke : "Sorry jokes can´t show"}</h2>

            {/* { iconPress &&  */}
                        <div className='buttonBox' style={{cursor:"pointer",display:"flex",flexWrap:"wrap",textAlign:"center",justifyContent:"center",gap:"10px",marginTop:"3em"}}>
                            <img src={likeIcon} onClick={likeAction} alt="like" style={estiloPersonal}></img>
                            <img src={disLikeIcon} onClick={disLikeAction} alt="disLike" style={estiloPersonal}></img>
                        </div>
            {/* } */}

            <Button variant='contained' onClick={newJoke} style={{cursor:"pointer", marginTop:"2em"}}>New Joke</Button>
            <p>Te han gustan : {like}</p>
            <p>Te han disgustado : {disLike}</p>
            <Button variant='contained' onClick={()=>navigate('/')}>Volver al inicio</Button>
        </div>
    );
}

export default StartGame;
